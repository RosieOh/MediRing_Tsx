import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

const Tr = styled.tr`
  &:hover {
    background: #f5f6fa;
  }
`;

const StatusBadge = styled.span<{ status: 'active' | 'inactive' | 'banned' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#e8f5e9';
      case 'inactive': return '#fff3e0';
      case 'banned': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'active': return '#2e7d32';
      case 'inactive': return '#ef6c00';
      case 'banned': return '#c62828';
      default: return '#757575';
    }
  }};
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'danger' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  background: ${props => props.variant === 'danger' ? '#dc3545' : '#4CAF50'};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

const SearchBar = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 데이터
  const users = [
    { id: 1, name: '홍길동', email: 'hong@example.com', status: 'active' as const },
    { id: 2, name: '김철수', email: 'kim@example.com', status: 'inactive' as const },
    { id: 3, name: '이영희', email: 'lee@example.com', status: 'banned' as const },
  ];

  const handleStatusChange = (userId: number, newStatus: 'active' | 'inactive' | 'banned') => {
    // TODO: API 호출로 상태 변경
    console.log(`User ${userId} status changed to ${newStatus}`);
  };

  return (
    <Container>
      <Title>회원 관리</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="이름 또는 이메일로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>검색</Button>
      </SearchBar>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>상태</Th>
            <Th>가입일</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <StatusBadge status={user.status}>
                  {user.status === 'active' ? '활성' : 
                   user.status === 'inactive' ? '비활성' : '정지'}
                </StatusBadge>
              </Td>
              <Td>2024-01-01</Td>
              <Td>
                <ActionButton onClick={() => handleStatusChange(user.id, 'active')}>
                  활성화
                </ActionButton>
                <ActionButton onClick={() => handleStatusChange(user.id, 'inactive')}>
                  비활성화
                </ActionButton>
                <ActionButton 
                  variant="danger"
                  onClick={() => handleStatusChange(user.id, 'banned')}
                >
                  정지
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserManagement; 