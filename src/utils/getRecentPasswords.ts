export function getRecentPasswords(passwords: Password[], limit: number) {
  return passwords.slice(0, limit);
}
