import React from "react"

export default function Registration () {

    const [regData, setRegData] = React.useState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
        comments: ""
    })

    function handleChange (event) {
        setRegData(prevRegData => {
            return {
                ...prevRegData,
                [event.target.name] : event.target.value
            }

        })
    }

    function submitForm () {
        return (
            regData.password === regData.confirmPassword ? alert("Success!") : alert("Passwords do not match!")
        )
    }

    return (
        <form>
            <input 
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={regData.firstName}/>

            <input 
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={regData.lastName}/>

            <input 
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={regData.password}/>

            <input 
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={regData.confirmPassword}/>

            <input 
            type="email"
            placeholder="Name@email.com"
            onChange={handleChange}
            name="email"
            value={regData.email}/>

            <input 
            type="number"
            placeholder="(555) 555-555"
            onChange={handleChange}
            name="phoneNumber"
            value={regData.phoneNumber}/>

            <textarea className="comments"
            placeholder="Comments..."
            onChange={handleChange}
            name="comments"
            value={regData.comments}/>

            <button type="submit" onClick={submitForm}>Submit</button>
        </form>

    )
}