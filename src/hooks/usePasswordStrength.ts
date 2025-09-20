import { calculatePasswordStrength } from "../utils/passStrength";

export const usePasswordStrength = (options: PassOptions) => {
  const strength = calculatePasswordStrength(options);
  if (strength !== undefined) return strength;
};
