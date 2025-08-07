import { useState, useEffect } from "react";
import {
  createSecretKey,
  generateKey,
  encryptData,
  decryptData,
} from "@/utils/security";

const SECRET_MESSAGE = "hei hei hei";
let encryptedTime = 0;
let decryptedTime = 0;

const SecurityPage = () => {
  const [encryptedData, setEncryptedData] = useState<string>("");
  const [decryptedData, setDecrypteData] = useState<string>("");

  useEffect(() => {
    (async function () {
      const secret = createSecretKey();
      let start = 0;
      let end = 0;
      console.log('secret', secret)
      //create and measure time it take to encrypt sample value
      start = Date.now();
      const keyEncrypt = await generateKey(secret);
      const encryptedData = await encryptData(keyEncrypt, SECRET_MESSAGE);
      end = Date.now();
      encryptedTime = end - start;
      setEncryptedData(encryptedData);

      //create and measure time it take to decrypt sample value
      start = Date.now();
      const keyDecrypt = await generateKey(secret);
      const decryptedData = await decryptData(keyDecrypt, encryptedData);
      end = Date.now();
      decryptedTime = end - start;
      setDecrypteData(decryptedData);
    })();
  }, []);

  return (
    <div>
      <p>original text: {SECRET_MESSAGE}</p>
      <p>encrypted text: {encryptedData}</p>
      <p>encrypted time: {encryptedTime}</p>
      <p>decrypted text: {decryptedData}</p>
      <p>decrypted time: {decryptedTime}</p>
    </div>
  );
};

export default SecurityPage;
