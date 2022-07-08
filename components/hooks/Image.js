import React from "react";

const ImageHook = ({file, error}) => {
    const [img, setImg] = React.useState(null);
    const [err, setErr] = React.useState(false);

    useEffect(() => {
        setImg(file);
        setErr(error);

        console.log(img, err, "CONSOLING FILE ERROR IN HOOK")
    }, [file]);

    return { img, err }
}

export default ImageHook;