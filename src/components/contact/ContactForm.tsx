import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('문의 내용:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>문의하기</h2>
      <label>
        이름:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        이메일:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        메시지:
        <textarea name="message" value={form.message} onChange={handleChange} />
      </label>
      <button type="submit">보내기</button>
    </form>
  );
};

export default ContactForm;
