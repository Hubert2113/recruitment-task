import {
    Form,
    SeachInput,
    SubmitBtn,
    SearchIcon,
  } from './Form.styles';


export const FormSection = ({inputValue, handleChange, handleSubmit}) => {
    return (
      <Form onSubmit={handleSubmit}>
        <SeachInput
          value={inputValue}
          onChange={handleChange}
          placeholder='Search product'
          type='number'
          required
        />
        <SubmitBtn type='submit'><SearchIcon/></SubmitBtn>
      </Form>
    );
}