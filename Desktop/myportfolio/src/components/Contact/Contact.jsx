import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { PhoneAndroid, Email, MyLocation } from '@mui/icons-material'
import emailjs from '@emailjs/browser'

const Container = styled.div`
  height: 100vh;
  position: relative;
`
const ContainerBackgorund = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  background-color: gray;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const WrapperLeft = styled.div`
  flex: 1;
`
const LeftTitle = styled.h1`
  font-size: 50px;
  width: 80%;
`
const Info = styled.div``
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
`
const Text = styled.h4`
  margin-left: 20px;
`
const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Dec = styled.p`
  font-weight: 200;
`
const Form = styled.form`
  margin-top: 20px;
`
const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`
const Button = styled.button`
  border: none;
  padding: 15px 30px;
  background-color: green;
  color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: black;
  }
`

function Contact() {
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [iserror, setIserror] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_jxgs12w',
        'template_tula7vu',
        formRef.current,
        'VhGKiuxOMw1hnIUIT'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSent(true)
        },
        (error) => {
          console.log(error.text)
          setIserror(true)
        }
      )
  }
  return (
    <Container>
      <ContainerBackgorund></ContainerBackgorund>
      <Wrapper>
        <WrapperLeft>
          <LeftTitle>Let's Discuss Your Next Project</LeftTitle>
          <Info>
            <InfoItem>
              <PhoneAndroid style={{ fontSize: '35px' }} />
              <Text>+234 7039 140 269</Text>
            </InfoItem>
            <InfoItem>
              <Email style={{ fontSize: '35px' }} />
              <Text>victoriad53.vi@gmail.com</Text>
            </InfoItem>
            <InfoItem>
              <MyLocation style={{ fontSize: '35px' }} />
              <Text>Akure, Ondo State, Nigeria.</Text>
            </InfoItem>
          </Info>
        </WrapperLeft>
        <WrapperRight>
          <Dec>
            <b>What do you want</b> me to design for you? You will definitely
            get the best of website design.
          </Dec>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type='text' placeholder='Name' name='user_name'></Input>
            <Input
              type='text'
              placeholder='Subject'
              name='user_subject'
            ></Input>
            <Input type='text' placeholder='Email' name='user_email'></Input>
            <TextArea rows={5} placeholder='Message' name='message'></TextArea>
            <Button>SUBMIT</Button>
            {sent && (
              <h4 style={{ color: 'red', marginTop: '30px' }}>
                Message Sent Succefully! You will hear from me some.
              </h4>
            )}

            {iserror && (
              <h4 style={{ color: 'red', marginTop: '30px' }}>
                Error sending msg... Please, try again!
              </h4>
            )}
          </Form>
        </WrapperRight>
      </Wrapper>
    </Container>
  )
}

export default Contact
