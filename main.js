function Init() {
	window.encrypt = document.querySelector("#encrypt");
	window.decrypt = document.querySelector("#decrypt");
	window.copy = document.querySelector("#copy");
	encrypt.addEventListener("click", EncryptText);
	decrypt.addEventListener("click", DecryptText);
	copy.addEventListener("click", CopyOutput);
}

function EncryptText() {
	const input = document.querySelector(".main-panel textarea").value;
	const output = document.querySelector(".output-panel textarea");

	const encrypted = input
		.toLowerCase()
		.replaceAll("a", "ai")
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");

	output.value = encrypted;
}

function DecryptText() {
	const input = document.querySelector(".main-panel textarea").value;
	const output = document.querySelector(".output-panel textarea");

	const decrypted = input
		.toLowerCase()
		.replaceAll("ufat", "u")
		.replaceAll("ober", "o")
		.replaceAll("imes", "i")
		.replaceAll("enter", "e")
		.replaceAll("ai", "a");

	output.value = decrypted;
}

function CopyOutput() {
	const output = document.querySelector(".output-panel textarea").value;
	navigator.clipboard.writeText(output);
}

window.addEventListener("load", Init);
