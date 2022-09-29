import React from "react";
import logo from "@assets/images/logo.svg";

type BuildinImageProps = (params: any) => any;

type ImageProps = {
    src: string;
    default?: string;
    [key: string]: string | BuildinImageProps | undefined;
};

const Image: React.FunctionComponent<ImageProps> = props => {
    const handleError = (e: any) => {
        e.target.onerror = null;
        e.target.src = props.default ?? logo;
    };

    return <img {...props} onError={handleError} />;
};

export default Image;
