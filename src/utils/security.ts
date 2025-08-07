/**
 * use it when you want to create a secret key to generate crypto key
 * @returns secret key to use for generateKey
 */
export function createSecretKey() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 32) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return btoa(result)
}

/**
 * create a crypto key for encrypting/decrypting
 * @param secretKey the keys (if you dont have 1, use createSecretKey)
 * @returns crypto key (this is a object)
 */
export async function generateKey(secretKey: string) {
  const binaryString = atob(secretKey); // Decode Base64 to binary string
  const uint8Array = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  return await window.crypto.subtle.importKey(
    "raw", // Importing a raw key
    uint8Array,
    { name: "AES-GCM", length: 256 }, // Specify the algorithm
    true, // Extractable
    ["encrypt", "decrypt"] // Usages
  );
}

/**
 * encrypt value to a base64 string
 * @param key key for encrypting data
 * @param data data that need to be encrypted
 * @returns base64 string to store
 */
export async function encryptData(key: CryptoKey, data: string) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization Vector
  const encodedData = new TextEncoder().encode(data);

  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encodedData
  );

  // Combine IV and encrypted data for storage
  const combinedData = new Uint8Array(iv.length + encryptedData.byteLength);
  combinedData.set(iv);
  combinedData.set(new Uint8Array(encryptedData), iv.length);

  return btoa(String.fromCharCode(...combinedData)); // Base64 encode for easy storage
}

/**
 * decrypt the encrypted base64 string
 * @param {cryptoKey} key key for decrypting data
 * @param {string} encryptedData data that need to be decrypted
 * @returns the decrypted value
 */
export async function decryptData(key: CryptoKey, encryptedData: string) {
  const combinedData = new Uint8Array(atob(encryptedData).split("").map(c => c.charCodeAt(0)));
  const iv = combinedData.slice(0, 12); // Extract IV
  const data = combinedData.slice(12); // Extract encrypted data

  const decryptedData = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv },
    key,
    data
  );

  return new TextDecoder().decode(decryptedData);
}

/**
 * get browser fingerprint
 * @returns a base 64 string
 */
export const getBrowserFingerprint = () => {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = navigator.language;

  // Get installed plugins
  const plugins = Array.from(navigator.plugins).map(plugin => plugin.name).join(', ');

  // Create a canvas fingerprint
  const canvas = document.createElement('canvas');
  
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.fillText('Browser Fingerprint', 2, 2);
  }

  const canvasData = canvas.toDataURL();

  // Combine all the collected data
  const fingerprint = [
    userAgent,
    `${screenWidth}x${screenHeight}`,
    timezone,
    language,
    plugins,
    canvasData
  ].join('###'); // Use a delimiter to combine

  // Hash the fingerprint for a unique identifier (simple hash function)
  return fingerprint;
}