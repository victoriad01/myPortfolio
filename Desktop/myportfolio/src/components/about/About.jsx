import React from 'react'
import styled from 'styled-components'
import image1 from '../../Pictures/Man-Download-PNG.png'
import image2 from '../../Pictures/Award-PNG-Transparent.png'

const Abt = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
const AbtLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`
const AbtCardBg = styled.div`
  background-color: gray;
  position: absolute;
  top: 50;
  left: 50;
  z-index: 2;
  padding-left: 50px;
`
const AbtCard = styled.div`
  height: 70vh;
  width: 60%;
  border-radius: 30px;
  background-color: gray;
  position: relative;
  overflow: hidden;
`
const AbtCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const AbtRight = styled.div`
  flex: 1;
`

const AboutMe = styled.h2`
  margin-bottom: 20px;
`
const AboutMeText = styled.p`
  width: 80%;
  line-height: 1.9;
`
const AwardSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const AwardTitle = styled.h4`
  color: gray;
`
const ImageWrap = styled.div``
const AwardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 40px;
`
const StoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const AwardText = styled.p`
  margin-top: 10px;
  font-size: 12px;
  width: 70%;
`

function About() {
  return (
    <Abt>
      <AbtLeft>
        <AbtCardBg></AbtCardBg>
        <AbtCard>
          <AbtCardImg src={image1}></AbtCardImg>
        </AbtCard>
      </AbtLeft>
      <AbtRight>
        <AboutMe>About me</AboutMe>
        <AboutMeText>
          Actively involved in programming for a year and have gained the
          confidence to contribute to new and ongoing projects. Built a
          market/shopping tracker app that allows users to input the items they
          intend to buy alongside with the proposed price. The app also allows
          users to compare prices after the shopping i.e. the proposed price
          versus the real price. Also, built an auto-mart e-commerce site with
          the UI for client side, Admin side, and the backend for the whole app.
          It is an app where users can shop for their preferred cars or
          vehicles.
        </AboutMeText>
        <AwardSide>
          <ImageWrap>
            <AwardImage src={image2}></AwardImage>
          </ImageWrap>
          <StoryWrap>
            <AwardTitle>Best Developer Award 2021</AwardTitle>
            <AwardText>
              Best Developer Award won in year 2021 for outstanding performance
              in development.
            </AwardText>
          </StoryWrap>
        </AwardSide>
      </AbtRight>
    </Abt>
  )
}

export default About
