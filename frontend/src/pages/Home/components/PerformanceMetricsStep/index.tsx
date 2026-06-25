import { GridContainer, StepContainer } from "../../styles"
import SalesPermanceCard from "../cards/SalesPerformanceCard"
import DiscountsCard from "../cards/DiscountsCard"
import ProductivityCard from "../cards/ProductivityCard"
import type { FormProps } from "../../../../interfaces/FormProps"


const PerformanceMetricsStep = ({ form }: FormProps) => {
  return (
    <StepContainer>
      <h2>Métricas de Desempenho</h2>
      <p>
        Preencha os dados de metas definidas e os resultados reais por categoria
        de indicador.
      </p>
      <GridContainer>
        <SalesPermanceCard form={form} />
        <DiscountsCard form={form} />
        <ProductivityCard form={form} />
      </GridContainer>
    </StepContainer>
  )
}

export default PerformanceMetricsStep