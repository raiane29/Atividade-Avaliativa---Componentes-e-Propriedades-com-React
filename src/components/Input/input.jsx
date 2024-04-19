import './input.css'


const Input = ({texto1, texto2, texto3, texto4}) => {
    return(
            <div className="inputDiv">
                <input type="text" className='inputT' value={texto1} />
                <input type="text" className='inputT' value={texto2} />
                <input type="text" className='inputT' value={texto3} />
                <input type="text" className='inputT' value={texto4} />
            </div>
    )
}
export default Input