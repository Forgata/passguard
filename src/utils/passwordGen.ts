export function passwordGenerator(options: PassOptions): string {
  let charPool = "abcdefghijklmnopqrstuvwxyz";
  let generatedPassword = "";

  // cumulating charpool
  //   if (options.includeLowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
  if (options.includeUppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.includeNumbers) charPool += "0123456789";
  if (options.includeSymbols) charPool += "!@#$%^&*()_+";

  if (options.passwordLength) {
    for (let i = 0; i < options.passwordLength; i++) {
      generatedPassword += charPool.charAt(
        Math.floor(Math.random() * charPool.length)
      );
    }
  }
  return generatedPassword;
}
