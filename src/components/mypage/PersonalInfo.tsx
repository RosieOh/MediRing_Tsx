import React, { useState } from 'react';
import styled from 'styled-components';

const PersonalInfoContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #E8F3E5;
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
  color: #4A7B43;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #E8F3E5;
  border-radius: 8px;
  font-size: 1rem;
  color: #2D5A27;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7BC6A3;
    box-shadow: 0 0 0 3px rgba(123, 198, 163, 0.2);
  }

  &:disabled {
    background-color: #F5F9F4;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.variant === 'primary' ? '#7BC6A3' : '#E8F3E5'};
  color: ${props => props.variant === 'primary' ? 'white' : '#4A7B43'};

  &:hover {
    background: ${props => props.variant === 'primary' ? '#6BB592' : '#D8E3D5'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PersonalInfo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '홍길동',
    email: 'hong@example.com',
    phone: '010-1234-5678',
    address: '서울특별시 강남구 테스트로 123',
    birthDate: '1990-01-01',
    gender: '남성'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출하여 데이터 저장
    setIsEditing(false);
  };

  return (
    <PersonalInfoContainer>
      <SectionTitle>개인정보 관리</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>이름</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <FormGroup>
          <Label>이메일</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <FormGroup>
          <Label>전화번호</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <FormGroup>
          <Label>주소</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <FormGroup>
          <Label>생년월일</Label>
          <Input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <FormGroup>
          <Label>성별</Label>
          <Input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </FormGroup>
        <ButtonGroup>
          {isEditing ? (
            <>
              <Button type="submit" variant="primary">
                저장
              </Button>
              <Button
                type="button"
                onClick={() => setIsEditing(false)}
                variant="secondary"
              >
                취소
              </Button>
            </>
          ) : (
            <Button
              type="button"
              onClick={() => setIsEditing(true)}
              variant="primary"
            >
              수정
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </PersonalInfoContainer>
  );
};

export default PersonalInfo; 