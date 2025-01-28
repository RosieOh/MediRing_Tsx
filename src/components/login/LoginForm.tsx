import React, { useState } from 'react';
import { handleLogin } from '../../utils/login';
import * as S from './style';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // 로그인 처리 함수
  const onLoginSubmit = (e: React.FormEvent) => {
    handleLogin(e, email, password, setError);
  };

  return (
    <S.LoginFormContainer>
      <h2>로그인</h2>
      {error && <S.LoginFormError>{error}</S.LoginFormError>}
      <S.LoginFormMain onSubmit={onLoginSubmit}>
        <S.LoginFormInputContainer>
          <label htmlFor="email">이메일</label>
          <S.LoginFormInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </S.LoginFormInputContainer>
        <S.LoginFormInputContainer>
          <label htmlFor="password">비밀번호</label>
          <S.LoginFormInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </S.LoginFormInputContainer>
        <S.LoginFormButton type="submit">로그인</S.LoginFormButton>
      </S.LoginFormMain>
    </S.LoginFormContainer>
  );
};

export default LoginPage;
