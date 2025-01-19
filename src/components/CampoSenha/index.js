import "./CampoSenha.css";

const CampoSenha = (props) => {
	return (
		<div className="campo-senha">
			<label>{props.label}</label>
			<input
				type="password"
				placeholder={`${props.placeholder}...`}
				value={props.value}
				onChange={props.onChange}
				{...props}
			/>
		</div>
	);
};

export default CampoSenha;
