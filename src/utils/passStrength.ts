export interface PasswordStrength {
  strength: number;
  message: string;
}

export function calculatePasswordStrength(
  options: PassOptions
): PasswordStrength {
  // Default values
  if (!options.passwordLength) {
    return { strength: 0, message: "Select password options" };
  }

  let strength = 0;

  // Length contribution
  if (options.passwordLength <= 6) strength += 10;
  else if (options.passwordLength <= 8) strength += 25;
  else if (options.passwordLength <= 12) strength += 50;
  else strength += 70;

  // Character type contribution
  if (options.includeLowercase) strength += 10;
  if (options.includeUppercase) strength += 15;
  if (options.includeNumbers) strength += 15;
  if (options.includeSymbols) strength += 20;

  // Cap strength at 100
  if (strength > 100) strength = 100;

  // Map strength score to message
  let message = "";
  if (strength < 30) message = "Weak";
  else if (strength < 60) message = "Medium";
  else if (strength < 85) message = "Strong";
  else message = "Very Strong";

  return { strength, message };
}
