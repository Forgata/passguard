export const quickPassword = (length: number, characters?: string): string => {
  const chars: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password: string = "";
  for (let i = 0; i < length; i++) {
    if (characters) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    } else {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  return password;
};
