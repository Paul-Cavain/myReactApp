import colorNames from "colornames"

const ColorDisplay = ( {colorName, setColorName, handleColorChange, hexValue, setHexValue} ) =>{
    return(
        <form className="mx-3" onSubmit={handleColorChange}>
            <hr className="border-2 border-red-600 mt-5" />
            <h2 className="text-center mt-12 text-xl">ColorGerenerator</h2>
            <div className="shadow-md border-2 border-black rounded-md h-40 mt-2" style={{backgroundColor: colorName}}>
                <p 
                className="text-center mt-14 text-2xl">
                    {colorName ? colorName : 'Empty Color'}
                </p>
                <p className="text-center text-xl">
                    {hexValue ? hexValue : null}
                </p>
            </div>
            <input
                type="text"
                placeholder="Add Color Name"
                className="h-12 w-full px-3 mt-4 rounded-md border-2 border-black"
                value={colorName}
                onChange={(e) => {
                    setColorName(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
        </form>
    )
}
export default ColorDisplay