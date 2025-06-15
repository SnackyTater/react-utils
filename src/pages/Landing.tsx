import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateKey, generateSecret, encryptString, decryptString, getDeviceFingerprint } from '@/utils/security';
import { getCookieValue, setCookie } from '@/utils/cookie';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => navigate('/login');

    useEffect(() => {
        (async function(){
            const secret = generateSecret();
            const key = await generateKey(secret);
            const fingerprint = getDeviceFingerprint();
            const data = JSON.stringify({ fingerprint, data: 'hei hei' });
            const encryptedData = await encryptString(data, key);
            console.log('encryptedData', JSON.stringify(fingerprint))
            setCookie('data', encryptedData);
            setCookie('key', secret);
            const cookie = getCookieValue('data');
            const decryptedData = await decryptString(encryptedData, key);
            console.log('decryptedData', decryptedData)
        })()
    }, [])


    return <div>LandingPage
        <button onClick={handleLogin}>login</button>
    </div>
};

export default LandingPage;