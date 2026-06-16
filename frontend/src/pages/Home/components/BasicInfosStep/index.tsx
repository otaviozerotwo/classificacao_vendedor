import type { FormProps } from "../../../../interfaces/FormProps"
import { GridContainer } from "../../styles"
import IdentificationCard from "../cards/IdentificationCard"
import LocationCard from "../cards/LocationCard"
import PeriodCard from "../cards/PeriodCard"

const BasicInfosStep = ({ form }: FormProps) => {
  return (
    <>
      <h2>Informações Básicas do Vendedor</h2>
      <p>
        Preencha os dados de identificação e contexto do vendedor para iniciar a
        avaliação.
      </p>
      <GridContainer>
        <IdentificationCard form={form} />
        <LocationCard form={form} />
        <PeriodCard form={form} />
      </GridContainer>
    </>
  )
}

export default BasicInfosStep