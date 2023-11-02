import { FC, ReactElement, useEffect, useState } from "react"

interface IProps {
    children: ReactElement
}
interface ID{
    id: string;
    age: number;
    pin?: number
}
export const ParentComp: FC<IProps> = (props)=> {
    const [num, setNum] = useState(0);
    const inc = (event: React.MouseEvent<HTMLButtonElement>)=> {
        // setNum(num+1)
        // event.target.
        var elm = event.target as HTMLElement
        console.log(elm.classList.remove('active'))
    }
    useEffect(()=> {
       const btn = document.getElementById('btn')
       console.log(btn)
    }, [])
    return (
        <div>
            {props.children}
            <button id="btn" onClick={inc} className="active">Increase</button>
        </div>
    )
}
