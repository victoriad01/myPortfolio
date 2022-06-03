import React from 'react'
import styled from 'styled-components'
import { ModeNight, LightMode } from '@mui/icons-material/'

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 4px solid gray;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 6;
`
const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: gray;
  position: absolute;
  cursor: pointer;
`
function Toggle() {
  return (
    <ToggleContainer>
      <LightMode></LightMode>
      <ModeNight></ModeNight>
      <Button></Button>
    </ToggleContainer>
  )
}

export default Toggle
