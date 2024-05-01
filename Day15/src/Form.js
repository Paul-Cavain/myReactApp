import Button from "./Button";

const Form = ({reqType, setReqType}) => {
    return(
        <form className="flex flex-row h-12 text-center fixed left-0 top-0 right-0 bottom-0"  onSubmit={(e) => e.preventDefault()} reqType = {reqType} setReqType={setReqType}> 
            <Button
                buttonText={'users'}
                reqType = {reqType}
                setReqType = {setReqType}   

            />
            <Button
                buttonText={'posts'}
                reqType = {reqType}
                setReqType = {setReqType}   

            />
            <Button
                buttonText={'comments'}
                reqType = {reqType}
                setReqType = {setReqType}   

            />
        </form>
    )
}
export default Form;        