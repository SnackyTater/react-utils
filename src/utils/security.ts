export const generateSecret = (): string => {
    const randomBuffer = window.crypto.getRandomValues(new Uint8Array(16)); // 128-bit secret
    const secret = window.btoa(String.fromCharCode(...randomBuffer));
    return secret
};

export const generateKey = async (base64Secret: string): Promise<CryptoKey> => {
    const rawKey = window.atob(base64Secret);
    const keyData = new Uint8Array(rawKey.length);
    for (let i = 0; i < rawKey.length; i++) {
        keyData[i] = rawKey.charCodeAt(i);
    }
    return await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'AES-GCM' },
        false,
        ['encrypt', 'decrypt']
    );
};

export const encryptString = async (text: string, key: CryptoKey) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
    const encryptedData = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        data
    );

    const encryptedArray = new Uint8Array(encryptedData);
    const cookieValue = JSON.stringify({
        iv: Array.from(iv),
        encryptedData: Array.from(encryptedArray),
    });

    return window.btoa(cookieValue); // Encode as Base64 for cookie
};

export const decryptString = async (cookieValue: string, key: CryptoKey) => {
    const { iv, encryptedData } = JSON.parse(window.atob(cookieValue));
    const decryptedData = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(iv) },
        key,
        new Uint8Array(encryptedData)
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedData);
};

export const getDeviceFingerprint = () => {
    const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: navigator.platform,
        plugins: Array.from(navigator.plugins).map(plugin => plugin.name).join(', '),
        cookieEnabled: navigator.cookieEnabled,
        hardwareConcurrency: navigator.hardwareConcurrency,
    };

    return JSON.stringify(fingerprint);
}