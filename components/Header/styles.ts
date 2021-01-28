import styled from 'styled-components'
import { Colors, Fonts } from '@/styles/variables'

export const HeaderWrapper = styled.header`
	display: flex;
	min-height: 100vh;
`

export const HeaderLeft = styled.header`
	align-items: center;
	background: linear-gradient(to bottom, ${Colors.DARK_1}, ${Colors.DARK_2});
	display: flex;
	justify-content: flex-end;
	padding: 100px 100px 100px 30px;
	width: 50%;
`

export const HeaderRight = styled.div`
	align-items: center;
	background: linear-gradient(to bottom, ${Colors.BLUE_1}, ${Colors.BLUE_2});
	display: flex;
	padding: 100px 30px 100px 100px;
	width: 50%;
`

export const HeaderContent = styled.div`
	width: 400px;
`

export const HeaderLogo = styled.div`
	svg {
		fill: ${Colors.WHITE};
	}
`

export const HeaderText = styled.div`
	color: ${Colors.WHITE};
	font-size: 1.5rem;
	margin: 20px 0 70px;
`

export const HeaderStep = styled.div`
	align-items: center;
	display: flex;
	margin: 50px 0;
`

export const HeaderStepNumber = styled.div`
	align-items: center;
	background: ${Colors.BLUE_3};
	border-radius: 50%;
	color: ${Colors.WHITE};
	display: flex;
	font-size: 3rem;
	font-weight: ${Fonts.LIGHT};
	height: 90px;
	justify-content: center;
	margin-right: 20px;
	width: 90px;
`

export const HeaderStepText = styled.h2`
	color: ${Colors.WHITE};
	font-size: 1.3rem;
`
