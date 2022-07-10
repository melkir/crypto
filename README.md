# Crypto

> Simple aes-256-gcm encryption and decryption module for NodeJS.

## Install

```sh
npm install @melkir/crypto
```

## Usage

```js
import { randomBytes } from "node:crypto";
import { decrypt, encrypt } from "@melkir/crypto";

// The key must contain exactly 32 characters.
// The following instruction generates one randomly which you can then save in your environment variables.
const key = randomBytes(16).toString("hex");

const message = "Shh its a seekrit";
const encrypted = encrypt(message, key);
// You can now send your encrypted message to anyone without worrying about it being intercepted.
// The person who receives your message will then be able to decipher the content in the following way.
const decrypted = decrypt(encrypted, key);
```

## Credits

Thanks [@vlucas](https://github.com/vlucas) for the [gist](https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb?permalink_comment_id=3771967#gistcomment-3771967).
