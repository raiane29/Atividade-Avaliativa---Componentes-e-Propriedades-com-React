import './App.css'
import Caixa_textos from '../Caixa_textos/Caixa_textos'
import Mini_caixa from '../Mini_caixa/Mini_caixa'
import Caixa from '../Caixa/Caixa'


const App = () => {
    return(
        
        <section className='container'>

        <div className='c1'>
           <Caixa_textos
           textoG="Learn to code by watching others"
           pe="See how eperienced developers solve problems in real-time.
           Watching scripted tutorials is great, but understanding how developers think is invaluable."
           />

        </div>


        <div className='c2'>

           <Mini_caixa
           t="Try it free 7 days then $20/mo. thereafter"
           />

           <Caixa
           t1="Name"
           t2="Last Name"
           t3="Email Address"
           t4="Password"
           btn="CLAIM YOUR FREE TRIAL"
           textinho="By clicking the button, you are agreeing to out"
           textinho2="Tearms and Services"/>

        </div>


        </section>
    )
}
 export default App