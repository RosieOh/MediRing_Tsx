import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const CardDescription = styled.p`
  color: #666;
`;

const AdminDashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Title>관리자 대시보드</Title>
      <Grid>
        <Card to="/admin/users">
          <CardTitle>회원 관리</CardTitle>
          <CardDescription>
            사용자 계정 관리, 권한 설정, 계정 상태 변경
          </CardDescription>
        </Card>
        <Card to="/admin/posts">
          <CardTitle>게시글 관리</CardTitle>
          <CardDescription>
            커뮤니티 게시글 관리, 게시글 승인/거부, 신고 처리
          </CardDescription>
        </Card>
        <Card to="/admin/reviews">
          <CardTitle>리뷰 관리</CardTitle>
          <CardDescription>
            병원 리뷰 관리, 부적절한 리뷰 처리, 리뷰 신고 관리
          </CardDescription>
        </Card>
        <Card to="/admin/hospitals">
          <CardTitle>병원 관리</CardTitle>
          <CardDescription>
            병원 정보 관리, 신규 병원 등록 승인, 병원 정보 수정
          </CardDescription>
        </Card>
        <Card to="/admin/reports">
          <CardTitle>신고 관리</CardTitle>
          <CardDescription>
            사용자 신고, 게시글 신고, 리뷰 신고 처리
          </CardDescription>
        </Card>
        <Card to="/admin/statistics">
          <CardTitle>통계</CardTitle>
          <CardDescription>
            사이트 사용 통계, 방문자 분석, 활동 현황
          </CardDescription>
        </Card>
      </Grid>
    </DashboardContainer>
  );
};

export default AdminDashboard; 