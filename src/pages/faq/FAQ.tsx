import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: '배송은 어떻게 되나요?', answer: '배송은 일반적으로 3-5일 정도 걸립니다.' },
    { question: '반품 절차는 어떻게 되나요?', answer: '반품은 구매 후 14일 이내에 가능합니다.' },
    { question: '결제 방법은 무엇이 있나요?', answer: '카드 결제, 계좌 이체, PayPal 등 다양한 방법이 있습니다.' }
  ];

  return (
    <div>
      <h2>자주 묻는 질문</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button onClick={() => handleToggle(index)}>
              {faq.question}
            </button>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
