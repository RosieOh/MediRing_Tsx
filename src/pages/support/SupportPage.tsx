import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import FAQ from '../faq/FAQ';

const SupportPage = () => {
  return (
    <div>
      <h1>고객지원 페이지</h1>
      <FAQ />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default SupportPage;
