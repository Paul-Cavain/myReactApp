const Button = ({ buttonText, reqType, setReqType }) => {
    return(
        <section className="bg-gray-400 w-full hover:text-white hover:bg-gray-600 place-content-center">
            <button
                className={(buttonText === reqType ? 'selected' : null)}            
                type="button"
                onClick={() => setReqType(buttonText)}
            >
                {buttonText}
            </button>
        </section>
    )
}
export default Button;  