import Botao from '../Botao'
import CampoSenha from '../CampoSenha'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return (
        <section className="formulario">
            <form>
                <h2> Faça seu Login: </h2>
                <CampoTexto label="Usuário" placeholder="Digite seu Usuário" />
                <CampoSenha label="Senha" placeholder="Digite sua senha"/>
                <Botao>
                    Logar
                </Botao>
            </form>
        </section>
    )

}

export default Formulario