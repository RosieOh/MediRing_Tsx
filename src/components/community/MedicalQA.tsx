import React, { useState } from 'react';
import styled from 'styled-components';

const QAContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const QAHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const QATitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
`;

const AskButton = styled.button`
  padding: 0.5rem 1rem;
  background: #7BC6A3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6BB592;
  }
`;

const QACategoryFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const QACategoryButton = styled.button<{ isActive: boolean }>`
  padding: 0.5rem 1rem;
  background: ${props => props.isActive ? '#7BC6A3' : '#E8F3E5'};
  color: ${props => props.isActive ? 'white' : '#4A7B43'};
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? '#6BB592' : '#D8E3D5'};
  }
`;

const QAList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QACard = styled.div`
  padding: 1rem;
  background: #F5F9F4;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const QuestionTitle = styled.h3`
  color: #2D5A27;
  font-size: 1rem;
  font-weight: 600;
`;

const QuestionDate = styled.span`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const QuestionContent = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const QuestionFooter = styled.div`
  display: flex;
  gap: 1rem;
  color: #A8C5A3;
  font-size: 0.75rem;
`;

const AnswerSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #E8F3E5;
`;

const AnswerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const DoctorBadge = styled.span`
  background: #7BC6A3;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

const AnswerContent = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
`;

const MedicalQA: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'general', name: '일반의학' },
    { id: 'internal', name: '내과' },
    { id: 'surgery', name: '외과' },
    { id: 'pediatrics', name: '소아과' },
    { id: 'emergency', name: '응급의학' }
  ];

  // 임시 데이터
  const qaList = [
    {
      id: 1,
      title: '감기 증상이 2주 이상 지속됩니다',
      content: '2주 전부터 감기 증상이 시작되었는데, 기침과 콧물이 계속되고 있습니다. 병원에 가야 할까요?',
      date: '2024-03-20',
      author: '홍길동',
      views: 156,
      hasAnswer: true,
      answer: {
        doctor: '김의사',
        content: '2주 이상 지속되는 감기 증상은 다른 질환의 가능성이 있습니다. 가까운 내과에서 진찰을 받아보시는 것을 추천드립니다.'
      }
    },
    {
      id: 2,
      title: '허리 통증이 심합니다',
      content: '요즘 허리 통증이 심해서 일상생활이 힘듭니다. 어떤 운동이 도움이 될까요?',
      date: '2024-03-19',
      author: '김철수',
      views: 89,
      hasAnswer: false
    },
    {
      id: 3,
      title: '아이가 열이 나고 구토를 합니다',
      content: '3살 아이가 38.5도의 열이 나고 구토를 합니다. 응급실에 가야 할까요?',
      date: '2024-03-18',
      author: '이영희',
      views: 234,
      hasAnswer: true,
      answer: {
        doctor: '박의사',
        content: '고열과 구토가 동반되는 경우 응급실 방문이 필요할 수 있습니다. 아이의 의식 상태와 탈수 증상도 함께 확인해주세요.'
      }
    }
  ];

  return (
    <QAContainer>
      <QAHeader>
        <QATitle>의료 Q&A</QATitle>
        <AskButton>질문하기</AskButton>
      </QAHeader>
      <QACategoryFilter>
        {categories.map(category => (
          <QACategoryButton
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </QACategoryButton>
        ))}
      </QACategoryFilter>
      <QAList>
        {qaList.map(qa => (
          <QACard key={qa.id}>
            <QuestionHeader>
              <QuestionTitle>{qa.title}</QuestionTitle>
              <QuestionDate>{qa.date}</QuestionDate>
            </QuestionHeader>
            <QuestionContent>{qa.content}</QuestionContent>
            <QuestionFooter>
              <span>작성자: {qa.author}</span>
              <span>조회: {qa.views}</span>
            </QuestionFooter>
            {qa.hasAnswer && qa.answer && (
              <AnswerSection>
                <AnswerHeader>
                  <DoctorBadge>의사</DoctorBadge>
                  <span>{qa.answer?.doctor}</span>
                </AnswerHeader>
                <AnswerContent>{qa.answer?.content}</AnswerContent>
              </AnswerSection>
            )}
          </QACard>
        ))}
      </QAList>
    </QAContainer>
  );
};

export default MedicalQA; 