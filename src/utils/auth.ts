// const StringToUint8Array = (str: string): Uint8Array => {
//   return new TextEncoder().encode(str);
// };

// const Uint8ArrayToString = (arr: Uint8Array): string => {
//   return new TextDecoder().decode(arr);
// };

// const encryptWithKey = async(plaintext: string, key: Uint8Array): Promise<string> => {
//   // Implement the encryption logic using the key as Uint8Array
//   // This could involve using a cryptographic library like WebCrypto API
//   const encrypted = await crypto.subtle.encrypt(
//     { name: 'AES-GCM', iv: new Uint8Array(16) },
//     await crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['encrypt']),
//     new TextEncoder().encode(plaintext)
//   );
//   return new TextDecoder().decode(new Uint8Array(encrypted));
// }

// const decryptWithKey = async(encryptedText: string, key: Uint8Array): Promise<string> => {
//   // Implement the decryption logic using the key as Uint8Array
//   // This could involve using a cryptographic library like WebCrypto API
//   const decrypted = await crypto.subtle.decrypt(
//     { name: 'AES-GCM', iv: new Uint8Array(16) },
//     await crypto.subtle.importKey('raw', key, 'AES-GCM', false, ['decrypt']),
//     new TextEncoder().encode(encryptedText)
//   );
//   return new TextDecoder().decode(new Uint8Array(decrypted));
// }

// export const encrypt = async(plaintext: string, key: string): Promise<string> => {
//   try {
//     // Convert the key string to Uint8Array
//     const keyBytes = StringToUint8Array(key);
//     console.log('1', keyBytes)

//     // Encrypt the plaintext using the key
//     const encryptedText = await encryptWithKey(plaintext, keyBytes);
//     console.log('2', encryptedText)

//     return encryptedText;
//   } catch (error) {
//     console.error('Error encrypting text:', error);
//     throw error;
//   }
// }

// export const decrypt = async(encryptedText: string, key: string): Promise<string> => {
//   try {
//     if(!encryptedText || !key) return '';

//     // Convert the key string to Uint8Array
//     const keyBytes = StringToUint8Array(key);

//     // Decrypt the encrypted text using the key
//     const decryptedText = await decryptWithKey(encryptedText, keyBytes);

//     return decryptedText;
//   } catch (error) {
//     console.error('Error decrypting text:', error);
//     throw error;
//   }
// }

// export const generateKey = (): string => {
//   return window.crypto.getRandomValues(new Uint8Array(32)).reduce(
//     (str, byte) => str + byte.toString(16).padStart(2, '0'),
//     ''
//   );
// };