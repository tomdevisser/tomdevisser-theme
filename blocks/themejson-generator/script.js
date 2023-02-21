import {
	handleGenerateFormSubmit,
	createColorPaletteItem,
} from "./generator.js";

document.addEventListener("DOMContentLoaded", () => {
	const generationForm = document.getElementById("generate-theme-json-form");
	const addColorButton = document.getElementById("add-color-button");
	const paletteItems = document.getElementsByClassName("color-palette-item");
	const paletteContainer = document.getElementById("color-palette-container");

	generationForm.addEventListener("submit", handleGenerateFormSubmit);
	addColorButton.addEventListener("click", (e) => {
		e.preventDefault();
		paletteContainer.appendChild(createColorPaletteItem(paletteItems.length));
	});
});
