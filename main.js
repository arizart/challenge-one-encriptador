var input, output, encrypt, decrypt, copy;

function Init() {
	input = document.querySelector(".main-panel textarea");
	output = document.querySelector(".output-panel textarea");
	encrypt = document.querySelector("#encrypt");
	decrypt = document.querySelector("#decrypt");
	copy = document.querySelector("#copy");
	encrypt.addEventListener("click", EncryptText);
	decrypt.addEventListener("click", DecryptText);
	copy.addEventListener("click", CopyOutput);
}

function EncryptText() {
	output.value = input.value
		.toLowerCase()
		.replaceAll("a", "ai")
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");
}

function DecryptText() {
	output.value = input.value
		.toLowerCase()
		.replaceAll("ufat", "u")
		.replaceAll("ober", "o")
		.replaceAll("imes", "i")
		.replaceAll("enter", "e")
		.replaceAll("ai", "a");
}

function CopyOutput() {
	navigator.clipboard.writeText(output.value);
}

window.addEventListener("load", Init);
