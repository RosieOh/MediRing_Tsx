import { Link } from "react-router-dom"; // Link 컴포넌트 import
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>MEDIRING</S.HeaderLogo>
      <S.HeaderNav>
        <S.HeaderNavItem href="#">홈</S.HeaderNavItem>
        <S.HeaderNavItem href="#">추천</S.HeaderNavItem>
        <S.HeaderNavItem href="#">기능별</S.HeaderNavItem>
        <S.HeaderNavItem>
          <Link to="/support" style={{ textDecoration: 'none', color: 'inherit' }}>
            고객지원
          </Link>
        </S.HeaderNavItem>
        <S.HeaderNavItem>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            로그인
          </Link>
        </S.HeaderNavItem>
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};

export default Header;
