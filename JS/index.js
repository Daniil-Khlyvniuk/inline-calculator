import { clickAnimation } from "./UI/keyboard/buttonClickAnumation.js"
import { inputSymbol } from "./UI/keyboard/input.js"


const calc = document.querySelector(".calculator")

calc.addEventListener("click", (ev) => {
	if (ev.target.tagName !== "BUTTON") return
	clickAnimation(ev)
	inputSymbol(ev)
})

console.log(
	`
	if you want to check result here, do not do this. 
	Console calculates not well.
	Try a real calculator.
	For example:
	https://www.desmos.com/scientific?lang=ru
	or
	https://www.google.com/search?q=calc+online&sxsrf=ALiCzsa4B2l5PmWilEaR_V2WrPChuXfGgQ%3A1655334029392&ei=jWSqYvPLF4uTrwTfp5zYAQ&oq=calc&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQsAMQJzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQzIHCAAQsAMQQzIHCAAQsAMQQzILCAAQsAMQChABEEMyCggAEOQCELADGAEyCggAEOQCELADGAEyCggAEOQCELADGAEyEgguEMcBENEDEMgDELADEEMYAjISCC4QxwEQ0QMQyAMQsAMQQxgCMhIILhDHARCjAhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQAFgAYPsFaAFwAXgAgAEAiAEAkgEAmAEAyAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz
	`
)