const form = document.querySelector(".main-form");
const password = form.querySelector("#password");
const confirmPassword = form.querySelector("#confirmPassword");
const errorText = form.querySelector(".error-text");

form.addEventListener("keyup", () => {
	const passwordValue = password.value;
	const confirmValue = confirmPassword.value;

	if (
		passwordValue === confirmValue &&
		passwordValue !== "" &&
		password.classList.contains("error")
	) {
		password.classList.remove("error");
		confirmPassword.classList.remove("error");
		errorText.style.display = "none";
	} else if (
		(passwordValue !== confirmValue || passwordValue === "") &&
		!password.classList.contains("error")
	) {
		password.classList.add("error");
		confirmPassword.classList.add("error");
		errorText.style.display = "inline";
	}
});
