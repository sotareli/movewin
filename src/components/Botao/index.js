import './Botao.css'


const Botao = (props) => {

    function btLogarClick(){

    }

    return (
        <button onClick={'/favoritos'} className='botao'>
            {props.children}
        </button>

    )
}

export default Botao