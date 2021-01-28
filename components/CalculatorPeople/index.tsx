import { FormEvent, useRef, useState } from 'react'
import { useCalculator } from '@/context/calculator'

import CalculatorTitle from '@/components/CalculatorTitle'
import PlusIcon from '@/components/Svg/PlusIcon'
import Input from '@/components/Input'
import Button from '@/components/Button'
import MinusIcon from '@/components/Svg/MinusIcon'

import {
	CalculatorPeopleWrapper,
	CalculatorPeopleLeft,
	CalculatorPeopleForm,
	CalculatorPeopleRight,
	CalculatorPeopleList,
	CalculatorPeoplePerson,
	CalculatorPeopleText,
	CalculatorPeopleIcon,
	CalculatorPeopleButton,
} from '@/components/CalculatorPeople/styles'

const CalculatorPeople = (): JSX.Element => {
	const [name, setName] = useState<string>('')
	const { people, removePerson, addPerson, setStep } = useCalculator()
	const ref = useRef<HTMLFormElement>()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (addPerson(name)) {
			ref.current.reset()
		}
	}

	return (
		<CalculatorPeopleWrapper>
			<CalculatorPeopleLeft>
				<CalculatorTitle
					title="Quem participou dos gastos?"
					text="Insira o nome das pessoas que participaram dos gastos."
				/>
				<CalculatorPeopleForm onSubmit={handleSubmit} ref={ref}>
					<Input
						name="name"
						placeholder="Nome"
						onChange={({ target: { value } }) => setName(value)}
					/>
					<Button
						backgroundColor="blueGradient"
						type="submit"
						aria-label="Clique para adicionar uma pessoa"
					>
						<PlusIcon />
					</Button>
				</CalculatorPeopleForm>
			</CalculatorPeopleLeft>
			<CalculatorPeopleRight>
				<CalculatorPeopleList>
					{people.map(({ name }, index) => (
						<CalculatorPeoplePerson key={name}>
							<CalculatorPeopleText>{name}</CalculatorPeopleText>
							<CalculatorPeopleIcon
								onClick={() => removePerson(index)}
								title={`Remover ${name}`}
							>
								<MinusIcon />
							</CalculatorPeopleIcon>
						</CalculatorPeoplePerson>
					))}
					{people.length > 1 && (
						<CalculatorPeopleButton>
							<Button
								backgroundColor="darkGradient"
								aria-label="Clique para ir ao próximo passo"
								type="button"
								onClick={() => setStep(2)}
							>
								AVANÇAR
							</Button>
						</CalculatorPeopleButton>
					)}
				</CalculatorPeopleList>
			</CalculatorPeopleRight>
		</CalculatorPeopleWrapper>
	)
}

export default CalculatorPeople
