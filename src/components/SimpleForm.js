import React, { useState } from "react"

const Form = () => {
  const [name, setName] = useState({ fname: "h" })

  const handleSubmit = (event) => {
    console.log("This form has been submitted")
    event.preventDefault()
  }
  const handleChange = (event) => {
    setName({ value: event.target.value })
  }
  return (
    <div>
      <h1>Simple Form</h1>
      {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={handleChange}
            placeholder="Type Name Here"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form

// import React, { useState } from "react"

// const Form = () => {
//   const [value, setValue] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//   })

//   const handleChange = (event) => {
//     setValue({
//       ...setValue,
//       [event.target.name]: event.target.value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form Submitted")
//   }
//   return (
//     <div style={{ border: "1px solid red" }}>
//       <div
//         style={{
//           maxWidth: "200px",
//           border: "1px solid blue",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <h2>Never miss our newsletter</h2>
//         <form>
//           <label>
//             Name
//             <input
//               type="text"
//               onChange={handleChange}
//               placeholder="first name"
//               name="fname"
//               id="fname"
//             ></input>
//           </label>
//           <label>
//             Last
//             <input
//               type="text"
//               onChange={handleChange}
//               placeholder="first name"
//               name="lname"
//               id="lname"
//             ></input>
//           </label>
//           <label>
//             email
//             <input
//               type="email"
//               onChange={handleChange}
//               placeholder="first name"
//               name="email"
//               id="email"
//             ></input>
//             {/* <label>
//               Terms and Conditions
//               <input
//                 onChange={(e) => {
//                   setValue(e.target.checked)
//                 }}
//                 type="checkbox"
//                 id="checkbox"
//                 name="checkbox"
//               ></input>
//             </label> */}
//           </label>
//           <button onClick={handleSubmit}>Submit</button>
//         </form>

//         <div>
//           <h6>You're typing:</h6>
//           <h4>{value.fname}</h4>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Form
