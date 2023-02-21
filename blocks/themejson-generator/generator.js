import { generateThemeJson, downloadThemeJson } from "./utils.js";

// Handle the form submit event.
const handleGenerateThemeJsonFormSubmit = (e) => {
	// Prevent the form from submitting.
	e.preventDefault();

	// Generate the theme.json file.
	const themeJsonString = generateThemeJson(e.target);

	// Download the theme.json file.
	downloadThemeJson(themeJsonString);
};

// Handle the add color button click event.
const handleAddColorButtonClick = (e) => {
	// Prevent the form from submitting.
	e.preventDefault();

	// Get the color palette container.
	const colorPaletteContainer = document.getElementById(
		"color-palette-container"
	);

	// Get the color palette item count.
	const colorPaletteItemCount =
		document.getElementsByClassName("color-palette-item").length;

	if (colorPaletteItemCount === 4) {
		e.target.remove();
	}

	// Create the color palette item.
	const colorPaletteItem = document.createElement("div");
	colorPaletteItem.classList.add("color-palette-item");

	// Create the color palette item name label.
	const colorPaletteItemNameLabel = document.createElement("label");
	colorPaletteItemNameLabel.setAttribute(
		"for",
		`color-${colorPaletteItemCount + 1}-name`
	);
	colorPaletteItemNameLabel.innerHTML = "Name";

	// Create the color palette item name input.
	const colorPaletteItemNameInput = document.createElement("input");
	colorPaletteItemNameInput.setAttribute("type", "text");
	colorPaletteItemNameInput.setAttribute(
		"name",
		`color-${colorPaletteItemCount + 1}-name`
	);
	colorPaletteItemNameInput.setAttribute(
		"id",
		`color-${colorPaletteItemCount + 1}-name`
	);

	// Append the color palette item name input to the color palette item.
	colorPaletteItem.appendChild(colorPaletteItemNameLabel);
	colorPaletteItem.appendChild(colorPaletteItemNameInput);

	// Create the color palette item hex label.
	const colorPaletteItemHexLabel = document.createElement("label");
	colorPaletteItemHexLabel.setAttribute(
		"for",
		`color-${colorPaletteItemCount + 1}-hex`
	);
	colorPaletteItemHexLabel.innerHTML = "Hex Value";

	// Create the color palette item hex input.
	const colorPaletteItemHexInput = document.createElement("input");
	colorPaletteItemHexInput.setAttribute("type", "text");
	colorPaletteItemHexInput.setAttribute(
		"name",
		`color-${colorPaletteItemCount + 1}-hex`
	);
	colorPaletteItemHexInput.setAttribute(
		"id",
		`color-${colorPaletteItemCount + 1}-hex`
	);

	// Append the color palette item hex input to the color palette item.
	colorPaletteItem.appendChild(colorPaletteItemHexLabel);
	colorPaletteItem.appendChild(colorPaletteItemHexInput);

	// Append the color palette item to the color palette container.
	colorPaletteContainer.appendChild(colorPaletteItem);
};

document.addEventListener("DOMContentLoaded", () => {
	// Get the form element.
	const generateThemeJsonForm = document.getElementById(
		"generate-theme-json-form"
	);

	// Get the button element.
	const addColorButton = document.getElementById("add-color-button");

	// Add the event listener to the button.
	generateThemeJsonForm.addEventListener(
		"submit",
		handleGenerateThemeJsonFormSubmit
	);

	// Add the event listener to the button.
	addColorButton.addEventListener("click", handleAddColorButtonClick);
});
