import "./Botao.css";

const Botao = (props) => {
	return (
		<button type="submit" className="botao" onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Botao;
