import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.powderBlue};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
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
`

export const Title = styled.h1`
  font-size: 24px;
`
