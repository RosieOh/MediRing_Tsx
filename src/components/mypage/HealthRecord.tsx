import React from 'react';
import styled from 'styled-components';

const HealthRecordContainer = styled.div`
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

const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const RecordCard = styled.div`
  background: #F5F9F4;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const RecordTitle = styled.h3`
  color: #4A7B43;
  font-size: 1rem;
  margin-bottom: 0.75rem;
`;

const RecordValue = styled.p`
  color: #2D5A27;
  font-size: 1.25rem;
  font-weight: 600;
`;

const RecordDate = styled.p`
  color: #A8C5A3;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const HealthRecord: React.FC = () => {
  // 임시 데이터
  const healthRecords = [
    { title: '혈압', value: '120/80', date: '2024-03-20' },
    { title: '혈당', value: '95 mg/dL', date: '2024-03-20' },
    { title: '체중', value: '65 kg', date: '2024-03-20' },
    { title: 'BMI', value: '22.5', date: '2024-03-20' },
    { title: '심박수', value: '72 bpm', date: '2024-03-20' },
    { title: '체온', value: '36.5°C', date: '2024-03-20' },
  ];

  return (
    <HealthRecordContainer>
      <SectionTitle>건강 기록</SectionTitle>
      <RecordGrid>
        {healthRecords.map((record, index) => (
          <RecordCard key={index}>
            <RecordTitle>{record.title}</RecordTitle>
            <RecordValue>{record.value}</RecordValue>
            <RecordDate>{record.date}</RecordDate>
          </RecordCard>
        ))}
      </RecordGrid>
    </HealthRecordContainer>
  );
};

export default HealthRecord; 