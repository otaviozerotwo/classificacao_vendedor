import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1480px;
  margin: 0 auto;
  padding: 24px 0px;

  .flex {
    display: flex;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin-left: 48px;
  margin-right: 16px;
  background-color: #0f0f0fff;
  border-radius: 50%;
`

export const Step = styled.h3`
  margin-bottom: 4px;
`

export const Description = styled.p`
  font-weight: 500;
`

export const ProgressBar = styled.div`
  background-color: #0f0f0fff;
  height: 8px;
  margin-left: 12px;
  border-radius: 8px;
  display: flex;
  align-self: center;
`
