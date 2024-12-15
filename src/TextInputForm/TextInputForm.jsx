import TextInput from "../TextInput/TextInput";

import Button from "../Components/Button/Button";
function TextInputForm({onSubmit}){

    return(
        <form className="flex" onSubmit={onSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 

                label="Enter a word or  phrase"
                type="password"

                />
            </div>

            <div className="flex">
                <Button 
                text="ok"
                type="submit"
                />
            </div>
        </form>
    );
}
export default TextInputForm;