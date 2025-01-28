import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoginFormMain = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginFormInputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const LoginFormButton = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoginFormError = styled.div`
  color: red;
  margin-bottom: 1rem;
`;
