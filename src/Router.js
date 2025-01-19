import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import PaginaInicial from "./PaginaInicial";

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Formulario />} />
				<Route path="/exercises" element={<PaginaInicial />} />
			</Routes>
		</Router>
	);
};
