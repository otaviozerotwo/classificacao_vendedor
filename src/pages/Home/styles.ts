import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  margin: 24px 0px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    color: ${colors.charcoalBlue};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;
`

export const Card = styled.div`
  height: 324px;
  padding: 20px;
  border: 1px solid ${colors.powderBlue};
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: ${colors.white};
`

export const CardTitle = styled.div`
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid ${colors.powderBlue};
  background-color: ${colors.white};

  h3 {
    font-size: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  label {
    display: block;
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  input,
  select {
    height: 32px;
    width: 100%;
    border: 1px solid ${colors.powderBlue};
    border-radius: 8px;
    margin-bottom: 16px;
    background-color: ${colors.platinum};
    padding: 0px 8px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.powderBlue};
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
  background-color: ${colors.white};
  border: 1px solid ${colors.powderBlue};
  border-radius: 8px;
  cursor: pointer;
  gap: 8px;
  margin-top: 14px;
`
