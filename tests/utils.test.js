/**
 * @jest-environment jsdom
 */

import * as utils from "../src/js/utils";

describe("slugifyString", () => {
	test("it should return the correct slug", () => {
		expect(utils.slugifyString("Hello World")).toBe("hello-world");
	});

	test("it should replace non-alphanumeric characters with dashes", () => {
		expect(utils.slugifyString("Th?$ !s gre@t!")).toBe("th-s-gre-t");
	});

	test("it should trim whitespace", () => {
		expect(utils.slugifyString("   another slug  ")).toBe("another-slug");
	});

	test("it should replace spaces and linebreaks with dashes", () => {
		expect(utils.slugifyString("Let's test\nthis")).toBe("let-s-test-this");
	});

	test("it should remove punctuation marks at the beginning or end", () => {
		expect(utils.slugifyString("!Slugs.")).toBe("slugs");
	});

	test("it should make everything lowercase", () => {
		expect(utils.slugifyString("LOWERCASE")).toBe("lowercase");
	});
});

describe("createDOMElement", () => {
	const element = utils.createDOMElement({
		type: "div",
		classes: ["test"],
		attributes: {
			"data-test": "test",
		},
		children: [document.createElement("span")],
	});

	const span = utils.createDOMElement({
		type: "span",
		innerHTML: "test",
	});

	test("it should create a DOM element", () => {
		expect(element).toBeInstanceOf(HTMLElement);
	});

	test("it should set the correct type", () => {
		expect(element.tagName).toBe("DIV");
	});

	test("it should set the correct classes", () => {
		expect(element.classList.contains("test")).toBe(true);
	});

	test("it should set the correct attributes", () => {
		expect(element.getAttribute("data-test")).toBe("tt");
	});

	test("it should set the correct children", () => {
		expect(element.children.length).toBe(1);
		expect(element.children[0].tagName).toBe("SPAN");
	});

	test("it should set the correct innerHTML", () => {
		expect(span.innerHTML).toBe("test");
	});
});

describe("generateJsonFile", () => {
	const file = utils.generateJsonFile("test", { test: "test" });

	test("it should generate a file", () => {
		expect(file).toBeInstanceOf(Blob);
	});

	test("it should generate file with the right type", () => {
		expect(file.type).toBe("application/json");
	});
});
