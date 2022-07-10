/// <reference types="bun-types" />
import { describe, expect, test } from "bun:test";
// @ts-ignore
import { decrypt, encrypt } from "./index";

describe("Crypto", () => {
  const ENCRYPTION_KEY = "YsySNFEK3W3SBGSjJKdJ8zBxQVSHnN2X";
  test("encrypt/decrypt message", () => {
    const message = "Hello World!";
    const encrypted = encrypt(message, ENCRYPTION_KEY);
    const decrypted = decrypt(encrypted, ENCRYPTION_KEY);
    expect(message).toBe(decrypted);
  });

  test("encrypt/decrypt json payload", () => {
    const payload = { firstname: "John", lastname: "Doe" };
    const encrypted = encrypt(payload, ENCRYPTION_KEY);
    const decrypted = decrypt(encrypted, ENCRYPTION_KEY);
    expect(JSON.stringify(payload)).toBe(decrypted);
  });
});
