import styled from "styled-components"
import colors from "../../../../styles/colors"

export const ItemContainer = styled.div`
  display: flex;
  padding-bottom: 12px;

  border-bottom: 2px solid ${colors.platinum};
`

export const IconContainer = styled.div`
  background-color: ${colors.platinum};
  padding: 4px;
  margin-right: 8px;
  border-radius: 8px;
  box-shadow: 1px 1px 2px ${colors.powderBlue};
`

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Label = styled.span`
  font-size: 10px;
  color: ${colors.powderBlue};
`

export const Item = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`

export const NameBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${colors.platinum};
  padding: 4px 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  text-transform: capitalize;
  box-shadow: 1px 1px 2px ${colors.powderBlue};
`