import { Stack } from "../Structures/index.js"


export class Validator {
	static isValid(expr) {
		expr = expr.replaceAll(" ", "")
		const digitRgx = new RegExp(`[0-9]`)
		const lastSymb = expr.slice(-1)
		const firstSymb = expr.slice(0, 1)

		if (expr.length === 0) throw new Error("Enter an expression")
		if (!expr.match(digitRgx)) throw new Error("Expression is not valid")
		if (Validator.isOp(lastSymb)) throw new Error("Expression is not valid")
		if (Validator.isOp(firstSymb) && firstSymb !== "-") throw new Error("Expression is not valid")

		let lastOpIndex = -1
		for (let i = 0; i < expr.length; i++) {
			const currSymb = expr[i]

			if (Validator.isOp(currSymb)) {
				if (lastOpIndex >= 0 && lastOpIndex === (i - 1)) {
					throw new Error("Expression is not valid")
				}
				lastOpIndex = i
			}
		}
		if (!Validator.isBracketsValid(expr)) {
			throw new Error("Expression is not valid")
		}
		return true
	}

	static isOp(symbol) {
		const ops = [ "+", "-", "/", "*", "^" ]
		return ops.includes(symbol)
	}

	static isBracketsValid(expr) {
		const brackets = { "(": ")" }
		const stack = new Stack()


		for (let i = 0; i < expr.length; i++) {
			const symbol = expr[i]

			if (symbol in brackets) {
				stack.add(symbol)
			}
			if (brackets["("] === symbol) {
				if (stack.getSize() === 0) return false
				stack.pop()
			}
			if (!Validator.checkNearSymbolsToBrackets(expr, i, symbol)) {
				return false
			}
		}
		return true
	}

	static checkNearSymbolsToBrackets(expr, currIndex, currBrackets) {
		const symBefore = expr[currIndex - 1]
		const symAfter = expr[currIndex + 1]

		if (currBrackets === "(") {
				return (
					(symAfter === "(" || typeof +symAfter === "number")
					&&
					(Validator.isOp(symBefore) || symBefore === "(" || symBefore === undefined)
				)
		}
		if (currBrackets === ")") {
			return (
				(symAfter === ")" || Validator.isOp(symAfter) || symAfter === undefined)
				&&
				(symBefore === ")" || typeof +symBefore === "number") && !Validator.isOp(symBefore)
			)
		}
		return true
	}
}




