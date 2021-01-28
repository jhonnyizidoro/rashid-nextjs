import styled from 'styled-components'
import { Colors } from '@/styles/variables'

export const CalculatorPeopleWrapper = styled.section`
	display: flex;
	justify-content: space-between;
`

export const CalculatorPeopleLeft = styled.div`
	width: 50%;
`

export const CalculatorPeopleForm = styled.form`
	display: flex;
`

export const CalculatorPeopleRight = styled.div`
	width: 40%;
`

export const CalculatorPeopleList = styled.ul``

export const CalculatorPeoplePerson = styled.li`
	align-items: center;
	border-bottom: 1px solid ${Colors.LIGHT_3};
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
`

export const CalculatorPeopleText = styled.span``

export const CalculatorPeopleIcon = styled.span`
	align-items: center;
	background: ${Colors.LIGHT_2};
	border-radius: 50%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	padding: 7px;

	svg {
		fill: ${Colors.DARK_2};
		width: 16px;
	}
`

export const CalculatorPeopleButton = styled.div`
	margin-top: 80px;
	text-align: right;
`
