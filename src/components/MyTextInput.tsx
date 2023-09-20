import React, {useState} from "react";

const MyTextInput = (props: {placeholder: string, hideText: boolean, id?: string}) => {

  const [text, setText] = useState("");

  return (
    <div className="MyTextInputContainer">
      <input onChange={() => setText} placeholder={props.placeholder} type={props.hideText ? "password" : "text"}/>
    </div>
  );
};

export default MyTextInput;