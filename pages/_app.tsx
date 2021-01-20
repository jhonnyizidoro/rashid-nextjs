import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<GlobalStyles />
		<Component {...pageProps} />
	</>
)

export default App
