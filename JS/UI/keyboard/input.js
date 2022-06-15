import { Calculator } from "../../Calculator/Calculator.js"
import { Parser } from "../../Parser/Parser.js"
import { Validator } from "../../Validator/Validator.js"
import { Error } from "../Error/Error.js"


export const inputSymbol = (ev) => {
	Error.remove()
	const inputEl = document.querySelector(".calculator__input")
	inputEl.scrollTop = inputEl.scrollHeight;

	if (ev.target.classList.contains("key-result")) {
		try {
			if (Validator.isValid(inputEl.textContent)) {
				const exprPRN = new Parser(inputEl.textContent).toRPN()
				inputEl.textContent = Calculator.calc(exprPRN)
			}
		} catch (err) {
			new Error({ message: "Expression is not valid" })
		}
	} else if (ev.target.classList.contains("clear")) {
		inputEl.textContent = inputEl.textContent.slice(0, inputEl.textContent.length - 1)
	} else if (ev.target.classList.contains("clearAll")) {
		inputEl.textContent = ""
	} else {
		let symbol = ev.target.getAttribute("data")
		inputEl.textContent += symbol
	}
}