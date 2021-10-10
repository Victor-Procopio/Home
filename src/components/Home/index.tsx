import * as C from './style'
import Logo from '../Imgs/Logo.jpg';

export const Home = () => {
    return(
        
        <C.Container>
            <img className="img" src={Logo} alt="logo" />
            <button type="submit" className="btn1 btn-primary">📈 Início</button>
            <button type="submit" className="btn btn-primary">📄 Contatos</button>
            <button type="submit" className="btn btn-primary">📈 Relatórios</button>
            <button type="submit" className="btn btn-primary">📄 Contatos</button>
            <button type="submit" className="btn btn-primary">📄 Contatos</button>
            <button type="submit" className="btn btn-primary">📄 Contatos</button>
        </C.Container>
 )
}