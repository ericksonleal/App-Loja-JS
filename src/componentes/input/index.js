import styled from "styled-components";

const InputContainer = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:focus {
        border-color: #0c495cff;
        outline: none;
    }

    &::placeholder {
        color: #0c495cff;
        font-size: 16px;
        font-style: italic;
    }
  `

  export default InputContainer