import crypto from 'crypto';

const secret = import.meta.env.VITE_AUTH_SECRET;

export const encrypt = (data: string) => {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(secret, 'salt', 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
}
  
export const decrypt = (encryptedData: any) => {
    if(!encryptedData) return '';
    const [ivHex, encryptedHex] = encryptedData.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const key = crypto.scryptSync(secret, 'salt', 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}