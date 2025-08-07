import { cn } from "./string";
// import { createSecretKey, generateKey, encryptData, decryptData } from './security';

test('cn must connect string properly', () => {
  const test1 = cn('a', 'b', 'c');
  const test2 = cn('a', '', 'c');
  const test3 = cn('', 'b', '', 'd');

  expect(test1).toBe('a b c');
  expect(test2).toBe('a c');
  expect(test3).toBe('b d');
})

// test('create secret key must return proper key', () => {
//   const secret = createSecretKey()

//   expect(typeof secret).toBe('string')
//   expect(secret.length).toBe(44)
// })

// test('encryptData and decryptData must encrypt and decrypt data correctly', async () => {
//   const secret = createSecretKey()
//   const message = 'sample message'

//   const encryptKey = await generateKey(secret)
//   const encryptedData = await encryptData(encryptKey, message)

//   expect(typeof encryptedData).toBe('string')

//   const decryptKey = await generateKey(secret)
//   const decryptedData = await decryptData(decryptKey, encryptedData)

//   expect(typeof decryptedData).toBe('string')
//   expect(decryptedData).toBe(message)
// })

// test('decryptData must not decrypt data with wrong key', async () => {
//   const correctSecret = createSecretKey()
//   const wrongKey = createSecretKey()
//   const message = 'sample message'

//   const encryptKey = await generateKey(correctSecret)
//   const encryptedData = await encryptData(encryptKey, message)

//   expect(typeof encryptedData).toBe('string')

//   const decryptKey = await generateKey(wrongKey)
//   const decryptedData = await decryptData(decryptKey, encryptedData)

//   expect(typeof decryptedData).toBe('string')
//   expect(decryptedData).not.toBe(message)
// })