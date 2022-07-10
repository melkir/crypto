# Crypto

> Simple aes-256-gcm encryption and decryption module for NodeJS.

## Install

```sh
npm install @melkir/crypto
```

## Usage

```js
import { decrypt, encrypt } from " @melkir/crypto";

const { ENCRYPTION_KEY } = process.env;
const message = "Shh its a seekrit";
const encrypted = encrypt(message, ENCRYPTION_KEY);
// You can now send your encrypted message to anyone without worrying about it being intercepted.
// The person who receives your message will then be able to decipher the content in the following way.
const decrypted = decrypt(encrypted, ENCRYPTION_KEY);
```

## Credits

Thanks [@vlucas](https://github.com/vlucas) for the [gist](https://gist.github.com/vlucas/2bd40f62d20c1d49237a109d491974eb?permalink_comment_id=3771967#gistcomment-3771967).
