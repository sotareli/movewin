import DataTable from "react-data-table-component";
import './TabelaAtividades.css'


const dados = [
    {
        id: 1,
        exercicio: 'orrida',
        data: '15/01/2025',
        duracao: '20 min',
        km: '45 km',
        pontuacao: '32'
    },
    {
        id: 2,
        exercicio: 'corrida',
        data: '16/01/2025',
        duracao: '20 min',
        km: '45 km',
        pontuacao: '27'
    },
    {
        id: 3,
        exercicio: 'corrida',
        data: '17/01/2025',
        duracao: '10 min',
        km: '45 km',
        pontuacao: '18'
    },
    {
        id: 4,
        exercicio: 'bike',
        data: '17/01/2025',
        duracao: '29 min',
        km: '45 km',
        pontuacao: '40'
    },
    {
        id: 1,
        exercicio: 'orrida',
        data: '15/01/2025',
        duracao: '20 min',
        km: '45 km',
        pontuacao: '32'
    },
    {
        id: 2,
        exercicio: 'corrida',
        data: '16/01/2025',
        duracao: '20 min',
        km: '45 km',
        pontuacao: '27'
    },
    {
        id: 3,
        exercicio: 'corrida',
        data: '17/01/2025',
        duracao: '10 min',
        km: '45 km',
        pontuacao: '18'
    },
    {
        id: 4,
        exercicio: 'bike',
        data: '17/01/2025',
        duracao: '29 min',
        km: '45 km',
        pontuacao: '40'
    }
];

const colunas = [ 
    {
        name: 'Exercicio',
        selector: row => row.exercicio,
        sortable: true
    },
    {
        name: 'Data',
        selector: row => row.data,
        sortable: true
    },
    {
        name: 'Duração',
        selector: row => row.duracao,
        sortable: true
    },
    {
        name: 'Km',
        selector: row => row.km,
        sortable: true
    },
    {
        name: 'Pontuação',
        selector: row => row.pontuacao,
        sortable: true
    }
];


const TabelaAtividades = (props) => {
    return (
        <div className='TabelaAtividades'>
            <h1>Histórico de Exercicios</h1>
            <DataTable
                columns={colunas}
                data={dados} 
                fixedHeader
                pagination
                ></DataTable>
        </div>
    
    )
}

export default TabelaAtividades;