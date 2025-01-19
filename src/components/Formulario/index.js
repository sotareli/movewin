import { useNavigate } from "react-router-dom";
import { api } from "../../services/APIUsuario";
import Banner from "../Banner/Banner";
import Botao from "../Botao";
import CampoSenha from "../CampoSenha";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	async function onClickLogin() {
		try {
			const body = {
				username,
				password,
			};

			const { data: loggedSuccess } = await api.users.login(body);

			if (loggedSuccess) {
				navigate("/exercises");
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Banner />

			<section className="formulario">
				<div>
					<h2> Faça seu Login: </h2>
					<CampoTexto
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						label="Usuário"
						placeholder="Digite seu Usuário"
					/>
					<CampoSenha
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						label="Senha"
						placeholder="Digite sua senha"
					/>
					<Botao onClick={onClickLogin}>Logar</Botao>
				</div>
			</section>
		</>
	);
};

export default Formulario;
