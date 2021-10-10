import * as C from "./style"
import Modelo from '../Imgs/modelo.jpg'

export const Apresentação = () =>{
    return(
        <C.Container>
                <h1>Olá Usuário</h1>
                <hr />
            <div className='Agrupar'>
                <div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div><div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div><div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div><div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div><div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div><div className='container'>
                    <img className='imgM' src={Modelo} alt="paisagem"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                    <p className='detalhes'>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                
            </div>
        </C.Container>
    )   
}