import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { CalculatorProvider } from '@/context/calculator'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<GlobalStyles />
		<CalculatorProvider>
			<Component {...pageProps} />
		</CalculatorProvider>
	</>
)

export default App
