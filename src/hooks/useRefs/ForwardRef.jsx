import {  useId, useRef } from "react"
import "./index.css"
export const ForwardRef = () => {
  
    const username = useRef(null)
    const password = useRef(null)

    const handelFormSubmit = ((e) =>{
        e.preventDefault()
        console.log(username.current.value , password.current.value)
    })


  return (
    <form onSubmit={handelFormSubmit}>
        <BeforeReact19Input  lable="username" ref={username}/>
        <BeforeReact19Input lable="password" ref={password} />
        <button>Sumbit</button>
    </form>
  )
}


//before 19
// const BeforeReact19Input = forwardRef((props , ref)=>{
//     const id = useId()
//     return (
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </div>
//     )
// })


//after 19
const BeforeReact19Input = ({label , ref})=>{
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    )
}