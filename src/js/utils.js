/**
 * Generate a JSON file.
 * @param {object} jsonContents A JSON object.
 * @returns {Blob} The JSON file.
 */
const generateJsonFile = (jsonContents) => {
	return new Blob([JSON.stringify(jsonContents, null, 2)], {
		type: "application/json",
	});
};

/**
 * Download a file.
 * @param {Blob} file The file to download.
 * @param {string} filename The name of the file.
 */
const downloadFile = (file, filename) => {
	const fileLink = document.createElement("a");
	fileLink.href = URL.createObjectURL(file);
	fileLink.download = filename;
	fileLink.click();
};

/**
 * Slugify a string.
 * @param {string} string The string to slugify.
 * @returns {string} The slugified string.
 */
const slugifyString = (string) => {
	return string
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
};

/**
 * Create a DOM element.
 * @param {object} options The options to create the element.
 * @returns {HTMLElement} The DOM element.
 */
const createDOMElement = (options) => {
	const { type, classes, attributes, innerHTML, children } = options;
	const element = document.createElement(type);

	if (classes) {
		for (const className of classes) {
			element.classList.add(className);
		}
	}

	if (attributes) {
		for (const [key, value] of Object.entries(attributes)) {
			element.setAttribute(key, value);
		}
	}

	if (innerHTML) {
		element.innerHTML = innerHTML;
	}

	if (children) {
		for (const child of children) {
			element.appendChild(child);
		}
	}

	return element;
};

export { generateJsonFile, downloadFile, slugifyString, createDOMElement };
