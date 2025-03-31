import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/search/SearchBar';

const SearchPageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchResults = styled.div`
  margin-top: 2rem;
`;

const ResultCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(45, 90, 39, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(45, 90, 39, 0.15);
  }
`;

const ResultTitle = styled.h3`
  color: #2D5A27;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ResultDescription = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: #4A7B43;
  font-size: 1.1rem;
`;

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string, type: string) => {
    setIsLoading(true);
    // TODO: 실제 API 호출로 대체
    // 임시 데이터
    const mockResults = [
      {
        id: 1,
        title: '검색 결과 예시 1',
        description: '이것은 검색 결과에 대한 설명입니다.',
      },
      {
        id: 2,
        title: '검색 결과 예시 2',
        description: '다른 검색 결과에 대한 설명입니다.',
      },
    ];

    // API 호출 시뮬레이션
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SearchPageContainer>
      <SearchBar onSearch={handleSearch} />
      <SearchResults>
        {isLoading ? (
          <div>검색 중...</div>
        ) : searchResults.length > 0 ? (
          searchResults.map((result) => (
            <ResultCard key={result.id}>
              <ResultTitle>{result.title}</ResultTitle>
              <ResultDescription>{result.description}</ResultDescription>
            </ResultCard>
          ))
        ) : (
          <NoResults>검색 결과가 없습니다.</NoResults>
        )}
      </SearchResults>
    </SearchPageContainer>
  );
};

export default SearchPage; 