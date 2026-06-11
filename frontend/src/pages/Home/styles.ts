import styled from 'styled-components'
import colors from '../../styles/colors'

type CardResultProps = {
  backgroundColor?: string
}

export const Container = styled.div`
  margin: 24px 0px;

  h2 {
    margin-bottom: 8px;
    text-shadow: 0.5px 0.5px;
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

  &.gridResult {
    grid-template-columns: 1fr 2fr;
  }
`

export const Card = styled.div`
  height: 324px;
  padding: 20px;
  border: 1px solid ${colors.powderBlue};
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 2px ${colors.powderBlue};
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

export const CardResult = styled.div<CardResultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 2px ${colors.powderBlue};
  padding: 20px;
  border: 1px solid trasparent;
  border-radius: 12px;
  margin-bottom: 24px;
  background-color: ${(props) => props.backgroundColor};
  color: ${colors.white};

  .resultIcon {
    border-radius: 50%;
    padding: 24px;
    background-color: rgba(255,255,255,0.2);
  }

  .resultClassification {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: rgba(255,255,255,0.2);
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const CardResume = styled.div`
  display: flex;
  gap: 32px;

  .gridResume {
    display: grid;
    grid-template-columns: 1fr;
    flex: 1;
    gap: 8px;
    font-size: 14px;
  }
`