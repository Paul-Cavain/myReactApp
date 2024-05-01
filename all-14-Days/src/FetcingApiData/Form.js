import Button from "./Button";

const Form = (reqType, setReqType) => {
    return(
        <form className="flex flex-row justify-around h-12"  onSubmit={(e) => e.preventDefault()} reqType = {reqType} setReqType={setReqType}>
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