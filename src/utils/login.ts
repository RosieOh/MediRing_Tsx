// src/utils/login.ts

export const handleLogin = (
  e: React.FormEvent,
  email: string,
  password: string,
  setError: React.Dispatch<React.SetStateAction<string | null>>
): boolean => {
  e.preventDefault();

  if (!email || !password) {
    setError('이메일과 비밀번호를 모두 입력해주세요.');
    return false;
  }

  // 로그인 성공 조건 (예시로 고정된 이메일/비밀번호)
  if (email === 'dhxogns920@naver.com' && password === '1234') {
    setError(null);
    alert('로그인 성공');
    return true; // 로그인 성공
  } else {
    setError('이메일 또는 비밀번호가 틀렸습니다.');
    return false; // 로그인 실패
  }
};
