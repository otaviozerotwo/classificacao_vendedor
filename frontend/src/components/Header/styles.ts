import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.powderBlue};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin-left: 48px;
  margin-right: 16px;
  background-color: ${colors.blue};
  border-radius: 14px;
  box-shadow: 2px 2px 8px ${colors.inkBlack};
`

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  text-shadow: 1px 1px;
`
