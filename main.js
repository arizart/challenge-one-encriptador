var input, output, encrypt, decrypt, copy;

function Init() {
	input = document.querySelector("#input-field");
	output = document.querySelector("#output-field");
	encrypt = document.querySelector("#encrypt-button");
	decrypt = document.querySelector("#decrypt-button");
	copy = document.querySelector("#copy-button");
	encrypt.addEventListener("click", EncryptText);
	decrypt.addEventListener("click", DecryptText);
	copy.addEventListener("click", CopyText);
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

function CopyText() {
	navigator.clipboard.writeText(output.value);
	output.value = "";
}

window.addEventListener("load", Init);
