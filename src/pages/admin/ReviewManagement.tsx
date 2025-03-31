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

const StatusBadge = styled.span<{ status: 'active' | 'reported' | 'hidden' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#e8f5e9';
      case 'reported': return '#fff3e0';
      case 'hidden': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'active': return '#2e7d32';
      case 'reported': return '#ef6c00';
      case 'hidden': return '#c62828';
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

const ReviewManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 데이터
  const reviews = [
    { 
      id: 1, 
      hospital: '서울대학교병원',
      author: '홍길동',
      rating: 5,
      content: '친절하고 전문적인 진료',
      status: 'active' as const,
      date: '2024-03-20'
    },
    { 
      id: 2, 
      hospital: '연세대학교병원',
      author: '김철수',
      rating: 4,
      content: '시설이 깔끔하고 좋습니다',
      status: 'reported' as const,
      date: '2024-03-19'
    },
    { 
      id: 3, 
      hospital: '고려대학교병원',
      author: '이영희',
      rating: 3,
      content: '대기 시간이 좀 길었어요',
      status: 'hidden' as const,
      date: '2024-03-18'
    },
  ];

  const handleStatusChange = (reviewId: number, newStatus: 'active' | 'reported' | 'hidden') => {
    // TODO: API 호출로 상태 변경
    console.log(`Review ${reviewId} status changed to ${newStatus}`);
  };

  return (
    <Container>
      <Title>리뷰 관리</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="병원명 또는 작성자로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>검색</Button>
      </SearchBar>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>병원명</Th>
            <Th>작성자</Th>
            <Th>평점</Th>
            <Th>내용</Th>
            <Th>상태</Th>
            <Th>작성일</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <Tr key={review.id}>
              <Td>{review.id}</Td>
              <Td>{review.hospital}</Td>
              <Td>{review.author}</Td>
              <Td>{review.rating}점</Td>
              <Td>{review.content}</Td>
              <Td>
                <StatusBadge status={review.status}>
                  {review.status === 'active' ? '활성' : 
                   review.status === 'reported' ? '신고됨' : '숨김'}
                </StatusBadge>
              </Td>
              <Td>{review.date}</Td>
              <Td>
                <ActionButton onClick={() => handleStatusChange(review.id, 'active')}>
                  표시
                </ActionButton>
                <ActionButton 
                  variant="danger"
                  onClick={() => handleStatusChange(review.id, 'hidden')}
                >
                  숨김
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReviewManagement; 