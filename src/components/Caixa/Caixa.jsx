import Button from "../Button/Button";
import Input from "../Input/input";
import './Caixa.css'

const Caixa = ({t1, t2, t3, t4 ,btn, textinho, textinho2})=> {
    return(
         <div className="conteiner2">
                 <Input
                 texto1={t1}
                 texto2={t2}
                 texto3={t3}
                 texto4={t4}
                 />

                 <Button
                 btnTexto={btn}
                 />

            <div className="osP">
                 <p className="tezinho1">{textinho}<p className="tezinho2">{textinho2}</p></p>
                 
            </div>
         </div>
    )
}
export default Caixa