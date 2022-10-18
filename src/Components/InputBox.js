import { useRef, useImperativeHandle, forwardRef } from "react";
const InputBox = forwardRef((p, ref) => {
    const inputRef = useRef();
    const showValue = () => {

        const value = inputRef.current.value;
        console.log("🚀 ~ file: InputBox.js ~ line 7 ~ setTimeout ~ value", value)



    };

    useImperativeHandle(ref, () => {
        return {
            showValue,
        };
    })


    return (

        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
})

export default InputBox;