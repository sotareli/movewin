import DataTable from "react-data-table-component";
import "./TabelaAtividades.css";
import { useEffect, useState } from "react";
import { api } from "../../services/APIUsuario";
import EExerciseTypes from "../../enum/EExerciseTypes";

const dados = [
	{
		id: 1,
		exercicio: "orrida",
		data: "15/01/2025",
		duracao: "20 min",
		km: "45 km",
		pontuacao: "32",
	},
	{
		id: 2,
		exercicio: "corrida",
		data: "16/01/2025",
		duracao: "20 min",
		km: "45 km",
		pontuacao: "27",
	},
	{
		id: 3,
		exercicio: "corrida",
		data: "17/01/2025",
		duracao: "10 min",
		km: "45 km",
		pontuacao: "18",
	},
	{
		id: 4,
		exercicio: "bike",
		data: "17/01/2025",
		duracao: "29 min",
		km: "45 km",
		pontuacao: "40",
	},
	{
		id: 1,
		exercicio: "orrida",
		data: "15/01/2025",
		duracao: "20 min",
		km: "45 km",
		pontuacao: "32",
	},
	{
		id: 2,
		exercicio: "corrida",
		data: "16/01/2025",
		duracao: "20 min",
		km: "45 km",
		pontuacao: "27",
	},
	{
		id: 3,
		exercicio: "corrida",
		data: "17/01/2025",
		duracao: "10 min",
		km: "45 km",
		pontuacao: "18",
	},
	{
		id: 4,
		exercicio: "bike",
		data: "17/01/2025",
		duracao: "29 min",
		km: "45 km",
		pontuacao: "40",
	},
];

const colunas = [
	{
		name: "Exercicio",
		selector: (row) => row.exercicio,
		sortable: true,
	},
	{
		name: "Data",
		selector: (row) => row.data,
		sortable: true,
	},
	{
		name: "Duração",
		selector: (row) => row.duracao,
		sortable: true,
	},
	{
		name: "Km",
		selector: (row) => row.km,
		sortable: true,
	},
	{
		name: "Pontuação",
		selector: (row) => row.pontuacao,
		sortable: true,
	},
];

const TabelaAtividades = (props) => {
	const [exercises, setExercises] = useState();

	useEffect(() => {
		loadExercises();
	}, []);

	async function loadExercises() {
		try {
			const { data } = await api.exercises.list();

			debugger;
			const formattedData = data?.map((exercise) => {
				return {
					id: exercise?._id,
					exercicio: Object.values(EExerciseTypes).find(
						(type) => type.code == exercise?.exercise_type
					).description,
					data: exercise?.exercise_date,
					duracao: exercise?.Duration,
					km: exercise?.Kilometers,
					pontuacao: exercise?.pontuation,
				};
			});

			setExercises(formattedData);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="TabelaAtividades">
			<h1>Histórico de Exercicios</h1>
			<DataTable
				columns={colunas}
				data={dados}
				fixedHeader
				pagination
			></DataTable>
		</div>
	);
};

export default TabelaAtividades;
