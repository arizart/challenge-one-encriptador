var input, output, encrypt, decrypt, empty, copy;

function Init() {
	input = document.querySelector("#input-field");
	output = document.querySelector("#output-field");
	encrypt = document.querySelector("#encrypt-button");
	decrypt = document.querySelector("#decrypt-button");
	empty = document.querySelector("#empty-message");
	copy = document.querySelector("#copy-button");
	encrypt.addEventListener("click", EncryptText);
	decrypt.addEventListener("click", DecryptText);
	copy.addEventListener("click", CopyText);
}

function EncryptText() {
	empty.style.zIndex = "-1";
	output.value = input.value
		.toLowerCase()
		.replaceAll("a", "ai")
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");
}

function DecryptText() {
	empty.style.zIndex = "-1";
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
	empty.style.zIndex = "10";
}

window.addEventListener("load", Init);
