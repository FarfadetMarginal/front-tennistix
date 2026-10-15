import { useState } from "react"

function Input() {
    const [text, setText] = useState("")

    function HandleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
    return (
        <>
            <input value={text} onChange={HandleChange} type="text" />
            <p>{text}</p>
        </>
    )
}

export default Input