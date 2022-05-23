import { useState } from "react"
import "./login.css"



const image = new URL("./loginbg.jpg",import.meta.url)

function Signup() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Email: ${email}`)
        
    }
    
    return ( 

        <div className="login">
         
        <div className="loginbg">
           <img src={image} />
        </div>


        <form className="box" onSubmit= {handleSubmit}>

            <label>Enter your name:
               <input 
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 className="form-control"  placeholder="Name"
              />
        
            </label>

            
            <label>Enter your Email:
               <input 
                 type="email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="form-control"  placeholder="123@email"
              />
        
            </label>
          
        
              <label>Password: 
                 <input 
                    type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="form-control" id="exampleInputPassword1" placeholder="Password"
                  />
               </label>
         
           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
   
  
    )
}

export default Signup