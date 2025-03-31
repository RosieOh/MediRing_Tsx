import React, { useState } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
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

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #F5F9F4;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NotificationInfo = styled.div`
  flex: 1;
`;

const NotificationTitle = styled.h3`
  color: #2D5A27;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const NotificationDescription = styled.p`
  color: #4A7B43;
  font-size: 0.875rem;
`;

const ToggleSwitch = styled.label<{ isActive: boolean }>`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.isActive ? '#7BC6A3' : '#E8F3E5'};
    transition: .4s;
    border-radius: 24px;

    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
      transform: ${props => props.isActive ? 'translateX(26px)' : 'translateX(0)'};
    }
  }
`;

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'appointment',
      title: '예약 알림',
      description: '예약 일정 24시간 전 알림',
      isEnabled: true
    },
    {
      id: 'prescription',
      title: '처방전 알림',
      description: '새로운 처방전 발급 시 알림',
      isEnabled: true
    },
    {
      id: 'test',
      title: '검사 결과 알림',
      description: '검사 결과 확인 가능 시 알림',
      isEnabled: true
    },
    {
      id: 'medicine',
      title: '복약 알림',
      description: '약 복용 시간 알림',
      isEnabled: false
    },
    {
      id: 'health',
      title: '건강 정보 알림',
      description: '건강 관련 뉴스 및 정보 알림',
      isEnabled: false
    }
  ]);

  const toggleNotification = (id: string) => {
    setSettings(settings.map(setting =>
      setting.id === id
        ? { ...setting, isEnabled: !setting.isEnabled }
        : setting
    ));
  };

  return (
    <NotificationContainer>
      <SectionTitle>알림 설정</SectionTitle>
      <NotificationList>
        {settings.map(setting => (
          <NotificationItem key={setting.id}>
            <NotificationInfo>
              <NotificationTitle>{setting.title}</NotificationTitle>
              <NotificationDescription>{setting.description}</NotificationDescription>
            </NotificationInfo>
            <ToggleSwitch isActive={setting.isEnabled}>
              <input
                type="checkbox"
                checked={setting.isEnabled}
                onChange={() => toggleNotification(setting.id)}
              />
              <span></span>
            </ToggleSwitch>
          </NotificationItem>
        ))}
      </NotificationList>
    </NotificationContainer>
  );
};

export default NotificationSettings; 