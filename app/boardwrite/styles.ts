import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const Header = styled.h1`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 30px 0px;
  padding: 30px;
  border: 1px solid lightgray;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;
export const Label = styled.span`
  font-size: 13pt;
  padding: 10px 0px;
`;
export const AddressInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-width: 1px;
  margin-bottom: 10px;
`;
export const Textarea = styled.textarea`
  height: 300px;
  padding: 10px;
  resize: none;
  border: 1px solid gray;
`;
export const ZipCodeInput = styled.input`
  width: 80px;
  height: 45px;
  text-align: center;
  border-width: 1px;
`;
export const ZipCodeWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  width: 220px;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  display: flex;
`;
export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const RadioButton = styled.input`
  width: 15px;
  height: 15px;
`;
export const RadioLabel = styled.label`
  font-size: 13pt;
  padding: 0px 5px;
`;
export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px 0px;
`;
export const Error = styled.div`
  color: red;
  font-size: 13px;
`;
export const ButtonWrapper = styled.div`
  margin-left: 15px;
`;
