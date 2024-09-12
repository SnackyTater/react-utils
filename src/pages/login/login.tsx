import { useState } from "react";
import { InputChangeEvent } from "@/types/component";
import { cn } from "@/utils/string";
import { Input } from "@/components/inputs";
import { Button } from "@/components/buttons";
import { Image } from "@/components/images";


const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState<string>('');

    const handleChangeUsername = (e: InputChangeEvent) => {
        setIsError('');
        setUsername(e.target.value);
    }

    const handleChangePassword = (e: InputChangeEvent) => {
        setIsError('');
        setPassword(e.target.value);
    }

    const handleLogin = async() => {
        if(!username || !password) return setIsError('must enter username & password');
    }

    return <div className="w-full h-full flex items-center justify-center">
        <div className="p-4 border border-[#00000099] flex flex-col items-center justify-center gap-5">
            <Image src="a" backupSrc="b" alt="string"/>
            <Input data-testid='username' value={username} onChange={handleChangeUsername} placeholder="enter username"/>
            <Input data-testid='password' value={password} onChange={handleChangePassword} placeholder="enter password"/>
            <p
                className={cn('text-[red]', isError ? 'visible' : 'invisible')}
                data-testid='error'
            >
                {isError}
            </p>
            <Button onClick={handleLogin}>login</Button>
        </div>
    </div>
};

export default LoginPage;