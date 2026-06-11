import styled from "styled-components"
import colors from "../../../../styles/colors"

export const Container = styled.footer`
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

  &.nextButton {
    background-color: ${colors.blue};
    color: ${colors.white};
    border-color: ${colors.blue};
  }

  &:disabled {
    cursor: not-allowed;
  }
`