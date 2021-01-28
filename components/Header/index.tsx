import ButtonAsLink from '@/components/ButtonAsLink'
import Logo from '@/components/Svg/Logo'

import {
	HeaderWrapper,
	HeaderLeft,
	HeaderRight,
	HeaderContent,
	HeaderLogo,
	HeaderText,
	HeaderStep,
	HeaderStepNumber,
	HeaderStepText,
} from './styles'

const Header = (): JSX.Element => (
	<HeaderWrapper>
		<HeaderLeft>
			<HeaderContent>
				<HeaderLogo>
					<Logo />
				</HeaderLogo>
				<HeaderText>Calculadora de divisão de gastos.</HeaderText>
				<ButtonAsLink
					aria-label="Apoiar o desenvolvedor"
					href="/#"
					backgroundColor="dark"
					type="button"
				>
					APOIAR
				</ButtonAsLink>
			</HeaderContent>
		</HeaderLeft>
		<HeaderRight>
			<HeaderContent>
				<HeaderStep>
					<HeaderStepNumber>1</HeaderStepNumber>
					<HeaderStepText>Adicionar participantes</HeaderStepText>
				</HeaderStep>
				<HeaderStep>
					<HeaderStepNumber>2</HeaderStepNumber>
					<HeaderStepText>Adicionar gastos</HeaderStepText>
				</HeaderStep>
				<HeaderStep>
					<HeaderStepNumber>3</HeaderStepNumber>
					<HeaderStepText>Pronto, a divisão está feita</HeaderStepText>
				</HeaderStep>
			</HeaderContent>
		</HeaderRight>
	</HeaderWrapper>
)

export default Header
