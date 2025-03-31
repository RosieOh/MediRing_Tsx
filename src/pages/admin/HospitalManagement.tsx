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

const StatusBadge = styled.span<{ status: 'active' | 'pending' | 'inactive' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#e8f5e9';
      case 'pending': return '#fff3e0';
      case 'inactive': return '#ffebee';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'active': return '#2e7d32';
      case 'pending': return '#ef6c00';
      case 'inactive': return '#c62828';
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

const HospitalManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 임시 데이터
  const hospitals = [
    { 
      id: 1, 
      name: '서울대학교병원',
      address: '서울특별시 종로구',
      phone: '02-2072-2114',
      departments: ['내과', '외과', '소아과'],
      status: 'active' as const,
      rating: 4.8,
      reviewCount: 128
    },
    { 
      id: 2, 
      name: '연세대학교병원',
      address: '서울특별시 서대문구',
      phone: '02-2228-0114',
      departments: ['내과', '외과', '소아과', '산부인과'],
      status: 'pending' as const,
      rating: 4.6,
      reviewCount: 95
    },
    { 
      id: 3, 
      name: '고려대학교병원',
      address: '서울특별시 성북구',
      phone: '02-920-5114',
      departments: ['내과', '외과', '소아과', '정신과'],
      status: 'inactive' as const,
      rating: 4.5,
      reviewCount: 78
    },
  ];

  const handleStatusChange = (hospitalId: number, newStatus: 'active' | 'pending' | 'inactive') => {
    // TODO: API 호출로 상태 변경
    console.log(`Hospital ${hospitalId} status changed to ${newStatus}`);
  };

  return (
    <Container>
      <Title>병원 관리</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="병원명 또는 주소로 검색"
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
            <Th>주소</Th>
            <Th>전화번호</Th>
            <Th>진료과목</Th>
            <Th>상태</Th>
            <Th>평점</Th>
            <Th>리뷰수</Th>
            <Th>관리</Th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <Tr key={hospital.id}>
              <Td>{hospital.id}</Td>
              <Td>{hospital.name}</Td>
              <Td>{hospital.address}</Td>
              <Td>{hospital.phone}</Td>
              <Td>{hospital.departments.join(', ')}</Td>
              <Td>
                <StatusBadge status={hospital.status}>
                  {hospital.status === 'active' ? '활성' : 
                   hospital.status === 'pending' ? '대기' : '비활성'}
                </StatusBadge>
              </Td>
              <Td>{hospital.rating}</Td>
              <Td>{hospital.reviewCount}</Td>
              <Td>
                <ActionButton onClick={() => handleStatusChange(hospital.id, 'active')}>
                  활성화
                </ActionButton>
                <ActionButton 
                  variant="danger"
                  onClick={() => handleStatusChange(hospital.id, 'inactive')}
                >
                  비활성화
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HospitalManagement; 