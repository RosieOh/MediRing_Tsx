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

const StatusBadge = styled.span<{ status: 'pending' | 'approved' | 'rejected' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => {
    switch (props.status) {
      case 'pending': return '#fff3e0';
      case 'approved': return '#e8f5e9';
      case 'rejected': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'pending': return '#ef6c00';
      case 'approved': return '#2e7d32';
      case 'rejected': return '#c62828';
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

const PostManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 데이터
  const posts = [
    { 
      id: 1, 
      title: '건강 관리 팁', 
      author: '홍길동',
      category: '건강정보',
      status: 'pending' as const,
      date: '2024-03-20'
    },
    { 
      id: 2, 
      title: '운동 방법', 
      author: '김철수',
      category: '운동',
      status: 'approved' as const,
      date: '2024-03-19'
    },
    { 
      id: 3, 
      title: '식단 추천', 
      author: '이영희',
      category: '식단',
      status: 'rejected' as const,
      date: '2024-03-18'
    },
  ];

  const handleStatusChange = (postId: number, newStatus: 'pending' | 'approved' | 'rejected') => {
    // TODO: API 호출로 상태 변경
    console.log(`Post ${postId} status changed to ${newStatus}`);
  };

  return (
    <Container>
      <Title>게시글 관리</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="제목 또는 작성자로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>검색</Button>
      </SearchBar>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>카테고리</Th>
            <Th>상태</Th>
            <Th>작성일</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td>{post.author}</Td>
              <Td>{post.category}</Td>
              <Td>
                <StatusBadge status={post.status}>
                  {post.status === 'pending' ? '대기' : 
                   post.status === 'approved' ? '승인' : '거절'}
                </StatusBadge>
              </Td>
              <Td>{post.date}</Td>
              <Td>
                <ActionButton onClick={() => handleStatusChange(post.id, 'approved')}>
                  승인
                </ActionButton>
                <ActionButton 
                  variant="danger"
                  onClick={() => handleStatusChange(post.id, 'rejected')}
                >
                  거절
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostManagement; 