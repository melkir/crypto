import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

export function encrypt(text: string, key: string): string {
  let iv = Buffer.from(randomBytes(16)).toString("hex").slice(0, 16);
  let cipher = createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv + ":" + encrypted.toString("hex");
}

export function decrypt(text: string, key: string): string {
  let textParts: string[] = text.includes(":") ? text.split(":") : [];
  let iv = Buffer.from(textParts.shift() || "", "binary");
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
