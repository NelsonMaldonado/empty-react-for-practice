import React from "react"
import useSound from "use-sound"
import styled from "styled-components"
// import conga from "src/public/sounds/conga.mp3"

const SoundEffect = () => {
  const press = () => {
    console.log("playing sound")
  }

  return (
    <div>
      <h3>Press play</h3>
      <Button onClick={press}>Play</Button>
    </div>
  )
}

export default SoundEffect

const Button = styled.button`
  color: white;
  background-color: green;
  width: 60px;
  height: 30px;
  border-color: none;
  border-radius: 7px;
`
