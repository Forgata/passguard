declare interface Password {
  id: string;
  websiteOrServiceName: string;
  usernameOrEmail: string;
  password: password;
  url: string | undefined;
  strength: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date | undefined;
}

declare interface PasswordContextValue {
  passwords: Password[];
  setPasswords: React.Dispatch<React.SetStateAction<Password[]>>;
  toggleFavorite: (id: string) => void;
  starredPasswords: Password[];
  deletePassword: (id: string) => void;
}
