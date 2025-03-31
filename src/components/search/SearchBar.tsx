import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: 2px solid #E8F3E5;
  border-radius: 12px;
  font-size: 1rem;
  color: #2D5A27;
  background-color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7BC6A3;
    box-shadow: 0 0 0 3px rgba(123, 198, 163, 0.2);
  }

  &::placeholder {
    color: #A8C5A3;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #4A7B43;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #2D5A27;
  }
`;

const SearchTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: center;
`;

const SearchTypeButton = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.isActive ? '#7BC6A3' : '#E8F3E5'};
  color: ${props => props.isActive ? 'white' : '#4A7B43'};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? '#6BB592' : '#D8E3D5'};
  }
`;

type SearchType = 'service' | 'doctor' | 'medicine' | 'faq';

interface SearchBarProps {
  onSearch: (query: string, type: SearchType) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('service');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchTypeSelector>
          <SearchTypeButton
            type="button"
            isActive={searchType === 'service'}
            onClick={() => setSearchType('service')}
          >
            의료 서비스
          </SearchTypeButton>
          <SearchTypeButton
            type="button"
            isActive={searchType === 'doctor'}
            onClick={() => setSearchType('doctor')}
          >
            의사/병원
          </SearchTypeButton>
          <SearchTypeButton
            type="button"
            isActive={searchType === 'medicine'}
            onClick={() => setSearchType('medicine')}
          >
            약품 정보
          </SearchTypeButton>
          <SearchTypeButton
            type="button"
            isActive={searchType === 'faq'}
            onClick={() => setSearchType('faq')}
          >
            자주 묻는 질문
          </SearchTypeButton>
        </SearchTypeSelector>
        <SearchInput
          type="text"
          placeholder={`${
            searchType === 'service' ? '의료 서비스 검색...' :
            searchType === 'doctor' ? '의사/병원 검색...' :
            searchType === 'medicine' ? '약품 정보 검색...' :
            '자주 묻는 질문 검색...'
          }`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchButton type="submit">
          {/* <FaSearch size={20} color="currentColor" /> */}
        </SearchButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar; 