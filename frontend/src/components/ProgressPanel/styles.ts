import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  background-color: ${colors.white};
  color: ${colors.blue};

  > div {
    display: flex;
    justify-content: center;
    max-width: 1480px;
    margin: 0 auto;
    padding: 24px 0px;
    gap: 14px;
  }
`

export const CardStep = styled.div`
  display: flex;
  margin-left: 14px;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  margin-right: 16px;
  background-color: ${colors.blue};
  border: 2px solid ${colors.powderBlue};
  border-radius: 50%;
`

export const Step = styled.h3`
  margin-bottom: 4px;
  font-size: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
`

export const ProgressBar = styled.div`
  background-color: ${colors.blue};
  height: 6px;
  width: 180px;
  border-radius: 8px;
  display: flex;
  align-self: center;
`
