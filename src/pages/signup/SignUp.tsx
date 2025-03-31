import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 로직 구현
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>회원가입</Title>
          <Subtitle>MediRing의 새로운 멤버가 되어보세요</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">전화번호</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="birthDate">생년월일</Label>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="gender">성별</Label>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </Select>
          </FormGroup>

          <TermsGroup>
            <CheckboxWrapper>
              <Checkbox
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <CheckboxLabel htmlFor="agreeTerms">
                이용약관 및 개인정보 처리방침에 동의합니다
              </CheckboxLabel>
            </CheckboxWrapper>
            <TermsLink to="/terms">자세히 보기</TermsLink>
          </TermsGroup>

          <SubmitButton type="submit">회원가입</SubmitButton>
        </Form>

        <LoginLink>
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </LoginLink>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #F5F9F4 0%, #E8F3E5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(45, 90, 39, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2D5A27;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #4A7B43;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2D5A27;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #E8F3E5;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7BC6A3;
    box-shadow: 0 0 0 2px rgba(123, 198, 163, 0.2);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #E8F3E5;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #7BC6A3;
    box-shadow: 0 0 0 2px rgba(123, 198, 163, 0.2);
  }
`;

const TermsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border: 1px solid #E8F3E5;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #4A7B43;
  font-size: 0.875rem;
  cursor: pointer;
`;

const TermsLink = styled(Link)`
  color: #7BC6A3;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #7BC6A3 0%, #6BB592 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(123, 198, 163, 0.3);
  }
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #4A7B43;
  font-size: 0.875rem;

  a {
    color: #7BC6A3;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default SignUp; 