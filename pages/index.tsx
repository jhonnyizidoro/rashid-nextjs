import { useCalculator } from '@/context/calculator'

import SEO from '../components/SEO'
import Header from '@/components/Header'
import Calculator from '@/components/Calculator'
import CalculatorPeople from '@/components/CalculatorPeople'
import CalculatorAmounts from '@/components/CalculatorAmounts'

const HomePage = (): JSX.Element => {
	const { step } = useCalculator()

	return (
		<>
			<SEO
				title="Rashid - Calculadora de gastos"
				description="lorem"
				keyWords="lorem"
			/>

			<Header />

			<Calculator>
				{step === 1 && <CalculatorPeople />}
				{step === 2 && <CalculatorAmounts />}
			</Calculator>
		</>
	)
}

export default HomePage
