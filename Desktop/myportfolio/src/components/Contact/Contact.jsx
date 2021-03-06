import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { PhoneAndroid, Email } from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../context'
import { mobile, tablets, latops } from '../../Responsive'

const Container = styled.div`
  height: 100vh;
  position: relative;
  ${mobile({ flexDirection: 'column', height: 'auto' })}
`
const ContainerBackground = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  background-color: gray;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`
const WrapperLeft = styled.div`
  flex: 1;
`
const LeftTitle = styled.h1`
  font-size: 50px;
  width: 80%;
  ${mobile({
    fontSize: '26px',
    width: '90%',
    marginTop: '20px',
    marginButtom: '20px',
  })}
`
const Info = styled.div``
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  ${mobile({ margin: '20px 0px' })}
`
const Text = styled.h4`
  margin-left: 20px;
  color: gray;
  ${mobile({ marginLeft: '10px' })}
`
const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const QuestionText = styled.div``
const Dec = styled.p`
  font-weight: 200;
  width: 60%;
  margin: 0;
  text-align: left;

  ${mobile({
    width: '90%',
    fontSize: '12px',
    lineHeight: '1.6',
    marginTop: '20px',
  })}

  ${tablets({
    width: '90%',
    fontSize: '12px',
    lineHeight: '1.6',
    marginTop: '20px',
    textAlign: 'left',
    paddingLeft: 0,
    marginLeft: 0,
  })}

  ${latops({ width: '80%' })}
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
  font-size: 18px;
  padding-left: 10px;
  ${mobile({ width: '100%' })}
  ${tablets({ width: '100%' })}
  ${latops({ width: '80%' })}
`
const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 18px;
  padding: 10px 0px 0px 10px;
`
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.15rem;
  &:hover {
    background-color: black;
  }
`
function Contact() {
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [iserror, setIserror] = useState(false)

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

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
      <ContainerBackground></ContainerBackground>
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
          </Info>
        </WrapperLeft>
        <WrapperRight>
          <QuestionText>
            <Dec>
              <b style={{ padding: 0, margin: 0 }}>What do you want</b> me to
              design for you? You will definitely get the best of website
              design.
            </Dec>
          </QuestionText>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#b8afaf',
              }}
              type='text'
              placeholder='Name'
              name='user_name'
            ></Input>
            <Input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#b8afaf',
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            ></Input>
            <Input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#b8afaf',
              }}
              type='text'
              placeholder='Email'
              name='user_email'
            ></Input>
            <TextArea
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#b8afaf',
              }}
              rows={7}
              placeholder='Message'
              name='message'
            ></TextArea>
            <Button>SEND</Button>
            {sent && (
              <h4 style={{ color: 'red', marginTop: '30px' }}>
                Message Sent Succefully! You will hear from me some.
              </h4>
            )}

            {iserror && (
              <h4
                style={{
                  color: 'red',
                  marginTop: '30px',
                }}
              >
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
