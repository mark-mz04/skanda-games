import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Main } from '../main/main';
import s from './app.module.css';

export const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};
