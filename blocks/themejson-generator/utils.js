// Description: Utility functions for the theme.json generator

// Append the value to the theme.json object.
const appendValueToThemeJson = (themeJsonContents, key, value) => {
	if (key.includes("color") && key.includes("name")) {
		const colorPaletteItem = {
			slug: slugifyString(value),
			name: value,
			color: "",
		};

		themeJsonContents.settings.color.palette.push(colorPaletteItem);
		return themeJsonContents;
	}

	if (key.includes("color") && key.includes("hex")) {
		const colorIndex = key.split("-")[1];

		themeJsonContents.settings.color.palette[colorIndex - 1].color = value;
		return themeJsonContents;
	}

	switch (key) {
		case "content-size":
			themeJsonContents.settings.layout.contentSize = value;
			break;
		case "wide-size":
			themeJsonContents.settings.layout.wideSize = value;
			break;
		case "appearance-tools":
			themeJsonContents.settings.appearanceTools = true;
			break;
		default:
			console.log("No match found for key: " + key + value);
			break;
	}

	return themeJsonContents;
};

// Generate the theme.json file.
const generateThemeJson = (form) => {
	// Create the theme.json object.
	let themeJsonContents = {
		$schema: "https://schemas.wp.org/trunk/theme.json",
		version: 2,
		settings: {
			appearanceTools: false,
			layout: {},
			color: {
				palette: [],
			},
		},
		styles: {},
	};

	// Get the values from the form.
	const formData = new FormData(document.forms["generate-theme-json-form"]);
	const formEntries = formData.entries();

	// Append the values to the theme.json object.
	for (const [key, value] of formEntries) {
		themeJsonContents = appendValueToThemeJson(themeJsonContents, key, value);
	}

	// Convert the theme.json object to a string.
	const themeJsonString = JSON.stringify(themeJsonContents, null, 2);

	// Create the theme.json file.
	const themeJsonFile = new Blob([themeJsonString], {
		type: "application/json",
	});

	return themeJsonFile;
};

// Download the theme.json file.
const downloadThemeJson = (themeJsonFile) => {
	const themeJsonUrl = URL.createObjectURL(themeJsonFile);
	const themeJsonLink = document.createElement("a");
	themeJsonLink.href = themeJsonUrl;
	themeJsonLink.download = "theme.json";
	themeJsonLink.click();
};

// Slugify a string.
const slugifyString = (string) => {
	return string
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
};

export { appendValueToThemeJson, generateThemeJson, downloadThemeJson };
