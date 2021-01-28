import { ChangeEvent, FormEvent } from 'react'
import { useCalculator } from '@/context/calculator'

import CalculatorTitle from '@/components/CalculatorTitle'
import InputMoney from '@/components/InputMoney'
import Button from '@/components/Button'

import {
	CalculatorAmountsWrapper,
	CalculatorAmountsCards,
	CalculatorAmountsCard,
	CalculatorAmountsText,
	CalculatorAmountsButtons,
} from '@/components/CalculatorAmounts/styles'

const CalculatorAmounts = (): JSX.Element => {
	const { people, setStep, setPersonAmount } = useCalculator()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	const handleChange = (
		{ target: { value } }: ChangeEvent<HTMLInputElement>,
		personName: string
	) => {
		const amount = Number(value.replace(/(R\$|,|\.)/g, '')) / 100
		setPersonAmount(personName, amount)
	}

	return (
		<CalculatorAmountsWrapper onSubmit={handleSubmit}>
			<CalculatorTitle
				title="Quanto cada um gastou?"
				text="Insira o valor que cada participante gastou"
			/>

			<CalculatorAmountsCards>
				{people.map(({ name, amount }) => (
					<CalculatorAmountsCard key={name}>
						<CalculatorAmountsText>{name}</CalculatorAmountsText>
						<InputMoney
							value={amount || 0}
							name="amount"
							placeholder="R$ 0,00"
							onChangeEvent={event => handleChange(event, name)}
						/>
					</CalculatorAmountsCard>
				))}
			</CalculatorAmountsCards>

			<CalculatorAmountsButtons>
				<Button
					backgroundColor="white"
					type="button"
					onClick={() => setStep(1)}
				>
					VOLTAR
				</Button>
				<Button backgroundColor="darkGradient" type="submit">
					CALCULAR
				</Button>
			</CalculatorAmountsButtons>
		</CalculatorAmountsWrapper>
	)
}

export default CalculatorAmounts
