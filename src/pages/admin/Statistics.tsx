import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  margin-top: 0.5rem;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const ChartTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
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

const Statistics: React.FC = () => {
  // 임시 데이터
  const stats = {
    totalUsers: 1250,
    activeUsers: 980,
    totalHospitals: 156,
    totalReviews: 3420,
    totalPosts: 890,
    totalReports: 45
  };

  const topHospitals = [
    { name: '서울대학교병원', rating: 4.8, reviews: 128 },
    { name: '연세대학교병원', rating: 4.6, reviews: 95 },
    { name: '고려대학교병원', rating: 4.5, reviews: 78 },
    { name: '세브란스병원', rating: 4.4, reviews: 65 },
    { name: '아주대학교병원', rating: 4.3, reviews: 52 }
  ];

  return (
    <Container>
      <Title>통계</Title>
      
      <Grid>
        <Card>
          <CardTitle>전체 회원 수</CardTitle>
          <StatValue>{stats.totalUsers}</StatValue>
          <StatLabel>활성 회원: {stats.activeUsers}명</StatLabel>
        </Card>
        <Card>
          <CardTitle>등록된 병원 수</CardTitle>
          <StatValue>{stats.totalHospitals}</StatValue>
          <StatLabel>전체 병원</StatLabel>
        </Card>
        <Card>
          <CardTitle>전체 리뷰 수</CardTitle>
          <StatValue>{stats.totalReviews}</StatValue>
          <StatLabel>전체 리뷰</StatLabel>
        </Card>
        <Card>
          <CardTitle>전체 게시글 수</CardTitle>
          <StatValue>{stats.totalPosts}</StatValue>
          <StatLabel>전체 게시글</StatLabel>
        </Card>
        <Card>
          <CardTitle>전체 신고 수</CardTitle>
          <StatValue>{stats.totalReports}</StatValue>
          <StatLabel>전체 신고</StatLabel>
        </Card>
      </Grid>

      <ChartContainer>
        <ChartTitle>인기 병원 TOP 5</ChartTitle>
        <Table>
          <thead>
            <tr>
              <Th>순위</Th>
              <Th>병원명</Th>
              <Th>평점</Th>
              <Th>리뷰 수</Th>
            </tr>
          </thead>
          <tbody>
            {topHospitals.map((hospital, index) => (
              <Tr key={hospital.name}>
                <Td>{index + 1}</Td>
                <Td>{hospital.name}</Td>
                <Td>{hospital.rating}</Td>
                <Td>{hospital.reviews}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </ChartContainer>
    </Container>
  );
};

export default Statistics; 