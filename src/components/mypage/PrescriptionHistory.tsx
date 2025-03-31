import React from 'react';
import styled from 'styled-components';

const PrescriptionContainer = styled.div`
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

const PrescriptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PrescriptionCard = styled.div`
  background: #F5F9F4;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PrescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const HospitalName = styled.h3`
  color: #2D5A27;
  font-size: 1.1rem;
  font-weight: 600;
`;

const PrescriptionDate = styled.p`
  color: #A8C5A3;
  font-size: 0.875rem;
`;

const MedicineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MedicineItem = styled.li`
  color: #4A7B43;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #E8F3E5;

  &:last-child {
    border-bottom: none;
  }
`;

const PrescriptionHistory: React.FC = () => {
  // 임시 데이터
  const prescriptions = [
    {
      hospital: '메디링 종합병원',
      date: '2024-03-15',
      medicines: ['아세트아미노펜 500mg', '이부프로펜 400mg', '비타민 C 1000mg']
    },
    {
      hospital: '메디링 내과',
      date: '2024-03-10',
      medicines: ['아목시실린 500mg', '로페라미드 2mg']
    },
    {
      hospital: '메디링 한의원',
      date: '2024-03-05',
      medicines: ['감기약', '기관지염약']
    }
  ];

  return (
    <PrescriptionContainer>
      <SectionTitle>처방전 이력</SectionTitle>
      <PrescriptionList>
        {prescriptions.map((prescription, index) => (
          <PrescriptionCard key={index}>
            <PrescriptionHeader>
              <HospitalName>{prescription.hospital}</HospitalName>
              <PrescriptionDate>{prescription.date}</PrescriptionDate>
            </PrescriptionHeader>
            <MedicineList>
              {prescription.medicines.map((medicine, medIndex) => (
                <MedicineItem key={medIndex}>{medicine}</MedicineItem>
              ))}
            </MedicineList>
          </PrescriptionCard>
        ))}
      </PrescriptionList>
    </PrescriptionContainer>
  );
};

export default PrescriptionHistory; 