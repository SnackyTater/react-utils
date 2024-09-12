import { cn } from "@/utils/string";
import { ImageProps } from './type';
import { ReactEventHandler, useRef } from "react";

const BaseImage = (props: ImageProps) => {
    const isReplaced = useRef<boolean>(false);

    const handleError: ReactEventHandler<HTMLImageElement> = ({currentTarget}) => {
        if(isReplaced.current) return;
        isReplaced.current = true;
        currentTarget.onerror = null;
        currentTarget.src = props.backupSrc;
    }

    return <img 
        className={cn('w-[100%] h-[100%] object-cover', props.className)}
        src={props.src}
        alt={props.alt}
        loading={props.lazy ? 'lazy' : 'eager'}
        onError={handleError}
    />
};

export default BaseImage;