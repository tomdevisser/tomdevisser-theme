import {
	generateJsonFile,
	downloadFile,
	slugifyString,
	createDOMElement,
} from "./utils.js";

/**
 * Append the form value to the theme.json object.
 * @param {object} themeObject The theme.json object.
 * @param {string} field The name of the form field.
 * @param {*} value The value of the form field.
 * @returns {object} The theme.json object.
 */
const appendFormValueToThemeJson = (themeObject, field, value) => {
	// Parse the color palette values.
	if (field.includes("color")) {
		if (field.includes("name")) {
			themeObject.settings.color.palette.push({
				slug: slugifyString(value),
				name: value,
				color: "",
			});
		} else if (field.includes("hex")) {
			// The fields are in the format color-1-hex, color-2-hex, etc.
			const colorIndex = field.split("-")[1];
			themeObject.settings.color.palette[colorIndex - 1].color = value;
		}
		return themeObject;
	}

	// Parse the rest of the values.
	switch (field) {
		case "content-size":
			themeObject.settings.layout.contentSize = value;
			break;
		case "wide-size":
			themeObject.settings.layout.wideSize = value;
			break;
		case "appearance-tools":
			themeObject.settings.appearanceTools = true;
			break;
		default:
			console.log("No match found for field: " + field);
			break;
	}

	return themeObject;
};

/**
 * Parse the form data.
 * @returns {object} The theme.json object.
 */
const addFormDataToThemeJson = (form) => {
	let jsonContents = {
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

	for (const [field, value] of new FormData(form).entries()) {
		jsonContents = appendFormValueToThemeJson(jsonContents, field, value);
	}

	return jsonContents;
};

/**
 * Handle the form submit event.
 * @param {Event} e The submit event.
 */
const handleGenerateFormSubmit = (e) => {
	e.preventDefault();

	const themeJsonContents = addFormDataToThemeJson(e.target);
	const themeJsonFile = generateJsonFile(themeJsonContents);
	downloadFile(themeJsonFile, "theme.json");
};

/**
 * Create a color palette item.
 * @param {number} count The number of color palette items.
 */
const createColorPaletteItem = (count) => {
	const paletteItemNameInput = createDOMElement({
		type: "input",
		attributes: {
			type: "text",
			name: `color-${count + 1}-name`,
			id: `color-${count + 1}-name`,
		},
	});

	const paletteItemNameLabel = createDOMElement({
		type: "label",
		attributes: {
			for: `color-${count + 1}-name`,
		},
		innerHTML: "Name",
		children: [paletteItemNameInput],
	});

	const paletteItemHexInput = createDOMElement({
		type: "input",
		attributes: {
			type: "color",
			name: `color-${count + 1}-hex`,
			id: `color-${count + 1}-hex`,
		},
	});

	const paletteItemHexLabel = createDOMElement({
		type: "label",
		attributes: {
			for: `color-${count + 1}-hex`,
		},
		innerHTML: "Color",
		children: [paletteItemHexInput],
	});

	const paletteItem = createDOMElement({
		type: "div",
		classes: ["color-palette-item"],
		children: [paletteItemNameLabel, paletteItemHexLabel],
	});

	return paletteItem;
};

export { handleGenerateFormSubmit, createColorPaletteItem };
