import styled from 'styled-components'
import { Colors } from '@/styles/variables'

export const CalculatorAmountsWrapper = styled.form``

export const CalculatorAmountsCards = styled.section`
	display: grid;
	grid-gap: 60px;
	grid-template-columns: repeat(4, 1fr);
`

export const CalculatorAmountsCard = styled.div`
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_2});
	box-shadow: 16px 19px 33px rgba(0, 0, 0, 0.05);
	padding: 30px;
`

export const CalculatorAmountsText = styled.div`
	color: ${Colors.WHITE};
	margin-bottom: 20px;
`

export const CalculatorAmountsButtons = styled.div`
	border-top: 1px solid ${Colors.LIGHT_3};
	display: flex;
	justify-content: space-between;
	margin-top: 60px;
	padding-top: 40px;
`
