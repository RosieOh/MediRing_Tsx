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

const StatusBadge = styled.span<{ status: 'pending' | 'resolved' | 'rejected' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => {
    switch (props.status) {
      case 'pending': return '#fff3e0';
      case 'resolved': return '#e8f5e9';
      case 'rejected': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'pending': return '#ef6c00';
      case 'resolved': return '#2e7d32';
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

const ReportManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 데이터
  const reports = [
    { 
      id: 1, 
      type: '리뷰',
      reporter: '홍길동',
      reported: '김철수',
      content: '부적절한 내용이 포함되어 있습니다.',
      status: 'pending' as const,
      date: '2024-03-20'
    },
    { 
      id: 2, 
      type: '게시글',
      reporter: '이영희',
      reported: '박지성',
      content: '허위 정보가 포함되어 있습니다.',
      status: 'resolved' as const,
      date: '2024-03-19'
    },
    { 
      id: 3, 
      type: '댓글',
      reporter: '최동욱',
      reported: '정우성',
      content: '욕설이 포함되어 있습니다.',
      status: 'rejected' as const,
      date: '2024-03-18'
    },
  ];

  const handleStatusChange = (reportId: number, newStatus: 'pending' | 'resolved' | 'rejected') => {
    // TODO: API 호출로 상태 변경
    console.log(`Report ${reportId} status changed to ${newStatus}`);
  };

  return (
    <Container>
      <Title>신고 관리</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="신고자 또는 신고대상으로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>검색</Button>
      </SearchBar>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>신고 유형</Th>
            <Th>신고자</Th>
            <Th>신고대상</Th>
            <Th>신고 내용</Th>
            <Th>상태</Th>
            <Th>신고일</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <Tr key={report.id}>
              <Td>{report.id}</Td>
              <Td>{report.type}</Td>
              <Td>{report.reporter}</Td>
              <Td>{report.reported}</Td>
              <Td>{report.content}</Td>
              <Td>
                <StatusBadge status={report.status}>
                  {report.status === 'pending' ? '대기' : 
                   report.status === 'resolved' ? '처리완료' : '반려'}
                </StatusBadge>
              </Td>
              <Td>{report.date}</Td>
              <Td>
                <ActionButton onClick={() => handleStatusChange(report.id, 'resolved')}>
                  처리완료
                </ActionButton>
                <ActionButton 
                  variant="danger"
                  onClick={() => handleStatusChange(report.id, 'rejected')}
                >
                  반려
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReportManagement;