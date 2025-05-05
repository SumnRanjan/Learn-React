import { useRef } from "react"
import "./index.css"
export const UseRefs = () => {
  const username = useRef(null)
  const password = useRef(null)
  const handleSumbit = (e) =>{
    e.preventDefault()
    console.log(username.current.value , password.current.value)
  }

  return (
    <form onSubmit={handleSumbit}>
      <input type="text" id="username" ref={username}/>
      <input type="text" id="password"  ref={password}/>
      <button>Sumbit</button>
    </form>
  )
}
