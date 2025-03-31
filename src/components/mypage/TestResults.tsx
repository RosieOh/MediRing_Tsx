import React from 'react';
import styled from 'styled-components';

const TestResultsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  color: #2D5A27;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #E8F3E5;
`;

const TestResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TestResultCard = styled.div`
  background: #F5F9F4;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TestName = styled.h3`
  color: #2D5A27;
  font-size: 1.1rem;
  font-weight: 600;
`;

const TestDate = styled.p`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const TestDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const TestItem = styled.div`
  padding: 0.75rem;
  background: white;
  border-radius: 6px;
`;

const TestItemLabel = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const TestItemValue = styled.p`
  color: #2D5A27;
  font-size: 1rem;
  font-weight: 500;
`;

const TestResults: React.FC = () => {
  // 임시 데이터
  const testResults = [
    {
      name: '혈액 검사',
      date: '2024-03-15',
      items: [
        { label: 'WBC', value: '7.5 x10^9/L' },
        { label: 'RBC', value: '4.8 x10^12/L' },
        { label: 'Hemoglobin', value: '14.2 g/dL' },
        { label: 'Platelet', value: '250 x10^9/L' }
      ]
    },
    {
      name: '소변 검사',
      date: '2024-03-15',
      items: [
        { label: 'pH', value: '6.5' },
        { label: 'Protein', value: 'Negative' },
        { label: 'Glucose', value: 'Negative' },
        { label: 'Ketone', value: 'Negative' }
      ]
    },
    {
      name: '심전도 검사',
      date: '2024-03-10',
      items: [
        { label: '심박수', value: '72 bpm' },
        { label: 'PR 간격', value: '160 ms' },
        { label: 'QRS 간격', value: '80 ms' },
        { label: 'QT 간격', value: '400 ms' }
      ]
    }
  ];

  return (
    <TestResultsContainer>
      <SectionTitle>검사 결과</SectionTitle>
      <TestResultsList>
        {testResults.map((test, index) => (
          <TestResultCard key={index}>
            <TestHeader>
              <TestName>{test.name}</TestName>
              <TestDate>{test.date}</TestDate>
            </TestHeader>
            <TestDetails>
              {test.items.map((item, itemIndex) => (
                <TestItem key={itemIndex}>
                  <TestItemLabel>{item.label}</TestItemLabel>
                  <TestItemValue>{item.value}</TestItemValue>
                </TestItem>
              ))}
            </TestDetails>
          </TestResultCard>
        ))}
      </TestResultsList>
    </TestResultsContainer>
  );
};

export default TestResults; 