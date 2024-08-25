const buttonCopy = document.querySelector(".btncopy");
const buttonClear = document.querySelector(".btnclear");
const buttonTranslate = document.querySelector(".btntranslate");
const inputText = document.querySelector(".in1");
const inputResult = document.querySelector(".in2");

buttonTranslate.addEventListener("click", function (e) {
	e.preventDefault();
	let isCode = false;
	const inputValue = inputText.value.toString();
	for (value of Object.values(alphabet)) {
		if (inputValue.includes(value)) {
			isCode = true;
		}
	}
	let isCorrect = true;
	for (const el of inputValue) {
		if (
			!Object.keys(alphabet).includes(el) &&
			!Object.values(alphabet).includes(el)
		) {
			isCorrect = false;
		}
	}
	if (isCorrect) {
		inputResult.value = isCode
			? Decode(inputValue.toLowerCase())
			: Code(inputValue);
	} else {
		alert("Ошибка. Проверьте правильность данных");
	}
});

buttonCopy.addEventListener("click", function (event) {
	event.preventDefault();
	const textArea = inputResult.value.toString();
	navigator.clipboard
		.writeText(textArea)
		.then(() => {
			alert("Текст скопирован");
		})
		.catch((e) => {
			try {
				const textField = inputResult.value.toString();
				textField.select();
				textField.setSelectionRange(0, 99999);
				document.execCommand("copy");
				alert("Текст скопирован");
			} catch (e) {
				alert("Ошибка при копировании:", e);
			}
		});
});

buttonClear.addEventListener("click", function (e) {
	e.preventDefault();
	inputText.value = "";
});

function Code(string) {
	res = "";
	for (const char of string) {
		for (const key of Object.keys(alphabet)) {
			res += char == key.toString() ? alphabet[key] : "";
		}
	}
	return res;
}

function Decode(string) {
	res = "";
	for (const char of string) {
		for (const key of Object.keys(alphabet)) {
			res += char == alphabet[key] ? key.toString() : "";
		}
	}
	return res;
}

const alphabet = {
	а: "α",
	б: "β",
	в: "γ",
	г: "δ",
	д: "し",
	е: "ζ",
	ё: "η",
	ж: "θ",
	з: "ι",
	и: "κ",
	й: "け",
	к: "μ",
	л: "ν",
	м: "ξ",
	н: "さ",
	о: "π",
	п: "ρ",
	р: "σ",
	с: "গ",
	т: "υ",
	у: "φ",
	ф: "χ",
	х: "থ",
	ц: "ω",
	ч: "ϕ",
	ш: "ϱ",
	щ: "ণ",
	ъ: "ϵ",
	ы: "こ",
	ь: "ϭ",
	э: "Ϯ",
	ю: "ϯ",
	я: "ϰ",
	"!": "ক",
	"?": "ψ",
	"*": "τ",
	".": "ঢ়",
	" ": "ভ",
	":": "ϖ",
	")": "あ",
	"(": "あ",
	">": "う",
	"<": "え",
	"%": "お",
	0: "ラ",
	1: "か",
	2: "き",
	3: "く",
	4: "λ",
	5: "Ϭ",
	6: "ο",
	7: "ε",
	8: "す",
	9: "せ",
};
