import React from "react"

export default function App() {
        
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        repeatPassword:"",
        newsletter: false
    })

    const [message, setMessage] = React.useState("")
    
    function handleChange(event){
        const {name, value, type, checked} = event.target 
        setFormData(prev =>{
            return {
                ...prev, 
                [name]: type==="checkbox"?checked:value
            }
        })
        
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password===formData.repeatPassword){
            setMessage("Successfully signed up")
        }
        else {setMessage("passwords to not match")}
    }
    
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name = "email"
                    onChange = {handleChange}
                    value = {formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name ="password"
                    onChange = {handleChange}
                    value = {formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name = "repeatPassword"
                    onChange = {handleChange}
                    value = {formData.repeatPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name = "newsletter"
                        onChange = {handleChange}
                        checked = {formData.newsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
