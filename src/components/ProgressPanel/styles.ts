import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;

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
  height: 48px;
  width: 48px;
  margin-right: 16px;
  background-color: #000;
  border-radius: 50%;
`

export const Step = styled.h3`
  margin-bottom: 4px;
`

export const Description = styled.p`
  font-weight: 500;
`

export const ProgressBar = styled.div`
  background-color: #000;
  height: 8px;
  width: 180px;
  border-radius: 8px;
  display: flex;
  align-self: center;
`
