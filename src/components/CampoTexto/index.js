import "./CampoTexto.css";

const CampoTexto = (props) => {
	return (
		<div className="campo-texto">
			<label>{props.label}</label>
			<input
				placeholder={`${props.placeholder}...`}
				value={props.value}
				onChange={props.onChange}
				{...props}
			/>
		</div>
	);
};

export default CampoTexto;
