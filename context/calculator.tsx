import {
	createContext,
	ReactChild,
	ReactNode,
	useContext,
	useState,
} from 'react'

interface CalculatorPerson {
	name: string
	amount?: number
}

interface CalculatorContext {
	step: number
	setStep: (step: number) => void
	people: CalculatorPerson[]
	addPerson: (name: string) => boolean
	removePerson: (index: number) => void
	setPersonAmount: (name: string, amount: number) => void
}

interface CalculatorProviderProps {
	children: ReactNode | ReactChild
}

const CalculatorContext = createContext<CalculatorContext>(
	{} as CalculatorContext
)

export const CalculatorProvider = ({
	children,
}: CalculatorProviderProps): JSX.Element => {
	const [step, setStep] = useState<number>(2)
	const [people, setPeople] = useState<CalculatorPerson[]>([
		{ name: 'Jhonny' },
		{ name: 'Brenda' },
		{ name: 'Matheus' },
		{ name: 'Calixto' },
	])

	const addPerson = (name: string) => {
		const personExists = people.find(person => person.name === name)
		if (personExists || !name.length) {
			return false
		} else {
			setPeople([...people, { name }])
			return true
		}
	}

	const removePerson = (index: number) => {
		setPeople(people.filter((person, auxIndex) => auxIndex !== index))
	}

	const setPersonAmount = (name: string, amount: number) => {
		setPeople(
			people.map(person => (person.name === name ? { name, amount } : person))
		)
	}

	return (
		<CalculatorContext.Provider
			value={{
				step,
				setStep,
				people,
				addPerson,
				removePerson,
				setPersonAmount,
			}}
		>
			{children}
		</CalculatorContext.Provider>
	)
}

export const useCalculator = (): CalculatorContext =>
	useContext(CalculatorContext)
