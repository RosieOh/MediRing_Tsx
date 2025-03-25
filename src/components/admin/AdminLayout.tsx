import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 64px);
`;

const Sidebar = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
`;

const SidebarTitle = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  display: block;
  padding: 0.75rem 1.5rem;
  color: ${props => props.active ? '#fff' : '#bdc3c7'};
  text-decoration: none;
  background: ${props => props.active ? '#34495e' : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    background: #34495e;
    color: white;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background: #f5f6fa;
`;

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarTitle>관리자 메뉴</SidebarTitle>
        <NavList>
          <NavItem>
            <NavLink to="/admin" active={isActive('/admin')}>
              대시보드
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/users" active={isActive('/admin/users')}>
              회원 관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/posts" active={isActive('/admin/posts')}>
              게시글 관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/reviews" active={isActive('/admin/reviews')}>
              리뷰 관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/hospitals" active={isActive('/admin/hospitals')}>
              병원 관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/reports" active={isActive('/admin/reports')}>
              신고 관리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/statistics" active={isActive('/admin/statistics')}>
              통계
            </NavLink>
          </NavItem>
        </NavList>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default AdminLayout; 