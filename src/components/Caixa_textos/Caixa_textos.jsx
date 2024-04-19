import './Caixa_textos.css'

const Caixa_textos = ({textoG, pe}) =>{
    return(
        <>
           <h1 className="tesao">{textoG}</h1>
           <p className="tp">{pe}</p>
        </>
    )
}

export default Caixa_textos