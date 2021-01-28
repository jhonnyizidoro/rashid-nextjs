import { ReactNode, ReactChild } from 'react'
import { CalculatorWrapper } from '@/components/Calculator/styles'

interface CalculatorProps {
	children: ReactNode | ReactChild
}

const Calculator = ({ children }: CalculatorProps): JSX.Element => (
	<CalculatorWrapper>{children}</CalculatorWrapper>
)

export default Calculator
