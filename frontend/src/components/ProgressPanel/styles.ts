import styled from 'styled-components'
import colors from '../../styles/colors'

type StatusProps = {
  status: 'pending' | 'active' | 'completed'
}

export const Container = styled.div`
  background-color: ${colors.white};

  > div {
    display: flex;
    justify-content: center;
    max-width: 1480px;
    margin: 0 auto;
    padding: 24px 0px;
    gap: 14px;
  }

  @media (max-width: 768px) {
    > div {
      align-items: center;
      flex-direction: column;
    }
  }
`

export const CardStep = styled.div<StatusProps>`
  display: flex;
  margin-left: 14px;
  color: ${({ status }) => {
    switch (status) {
      case 'completed':
        return colors.green

      case 'active':
        return colors.blue

      default:
        return colors.powderBlue
    }
  }};

  @media (max-width: 768px) {
    width: 80%;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
  }
`

export const Icon = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case 'completed':
        return colors.green

      case 'active':
        return colors.blue

      default:
        return colors.powderBlue
    }
  }};

  @media (max-width: 1024px) {
    height: 32px;
    width: 32x;
  }
`

export const Step = styled.h3`
  margin-bottom: 4px;
  font-size: 14px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`

export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 10px;
  }
`

export const ProgressBar = styled.div<StatusProps>`
height: 6px;
width: 180px;
border-radius: 8px;
display: flex;
align-self: center;
background-color: ${({ status}) => {
  switch (status) {
    case 'completed':
      return colors.green

    case 'active':
      return colors.blue

    default:
      return colors.powderBlue
  }
}};

@media (max-width: 768px) {
  width: 80%;
  height: 4px;
}
`
