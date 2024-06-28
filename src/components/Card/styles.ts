import styled from "styled-components";

export const Main = styled.main`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    bottom: 0;
    padding: 1em;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: white;
    margin-top: 1em;
  }
`

export const Information = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  gap: 2em;
`

export const SubInformation = styled.section`
  display: flex;
  justify-content: space-between;

  > div {
    width: 120px;
    height: 50px;
    background-color: black;
    border-radius: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;

  }
`

export const Buy = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
`

