import React, { useState } from "react"

const Form = () => {
  const [value, setValue] = useState({ fname: "", lname: "", email: "" })
  console.log(value)
  const handleChange = (event) => {
    debugger
  }
  //   const handleClick = () => {
  //     console.log("You clicked submit")
  //   }
  return (
    <div>
      <h2>This is a form</h2>
      <form>
        <label>
          Name
          <input
            type="text"
            onChange={handleChange}
            placeholder="first name"
            name="fname"
          ></input>
        </label>
        <label>
          Last
          <input
            type="text"
            onChange={handleChange}
            placeholder="first name"
            name="fname"
          ></input>
        </label>
        <label>
          email
          <input
            type="email"
            onChange={handleChange}
            placeholder="first name"
            name="email"
          ></input>
        </label>
        {/* <button
          onClick={() => {
            handleClick()
          }}
        >
          send
        </button> */}
      </form>
    </div>
  )
}
export default Form
