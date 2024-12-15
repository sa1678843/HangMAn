import getButtonstyling from "./getButtonStyleType";



function Button({text, styleType, OnClickHandler}){
    
    return (
        <div className="mr-2 flex-1">
   <button
   type = {buttontype}
   onclick={OnClickHandler}
   clasName={`px-4 py-2 ${getButtonstyling(styleType)} text-white rounded-md transition-all` }
  >
    {text}
   </button>
  
        </div>
    )

}


export default Button;


