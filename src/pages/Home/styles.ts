import styled from 'styled-components'

export const Container = styled.div`
  margin: 24px 0px;

  h2 {
    margin-bottom: 8px;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
`

export const Card = styled.div`
  height: 386px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: #fff;
`

export const CardTitle = styled.div`
  padding-bottom: 8px;
  margin-bottom: 14px;
  border-bottom: 1px solid #000;
  background-color: #fff;
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  input,
  select {
    height: 36px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 16px;
    background-color: #2c68a3ff;
    padding: 0px 8px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  input {
    width: 84px;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #000;
  height: 72px;

  > div {
    display: flex;
    gap: 12px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  gap: 8px;
`
