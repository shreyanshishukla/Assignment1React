import { useState } from "react"
import { useEffect } from "react"


export default () => {
    const [name, setName] = useState("wdwedwe");
    const inputname = (e) => {
     
        setName(e.target.value)
    }
    return (<div>
        <form>
            <input value={name} onChange={inputname} />
            <button >Add</button>
            
       </form>
   </div>)
}