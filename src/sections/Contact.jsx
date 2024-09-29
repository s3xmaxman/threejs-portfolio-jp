import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Alert from "../components/Alert.jsx";
import useAlert from "../hook/useAlert.js";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert, successMessage, errorMessage } =
    useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      showAlert({ text: successMessage, type: "success" });

      setTimeout(() => {
        hideAlert();
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error(error);
      showAlert({ text: errorMessage, type: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="ターミナル背景"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">お問い合わせ</h3>
          <p className="text-lg text-white-600 mt-3">
            新規ウェブサイトの構築、既存プラットフォームの改善、または独自のプロジェクトの実現など、お気軽にご相談ください。お手伝いさせていただきます。
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">氏名</span>
              <input
                type="text"
                name="name"
                value={form.name}
                className="field-input"
                onChange={handleChange}
                required
                placeholder="氏名を入力してください"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">メールアドレス</span>
              <input
                type="email"
                name="email"
                value={form.email}
                className="field-input"
                onChange={handleChange}
                required
                placeholder="メールアドレスを入力してください"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">メッセージ</span>
              <textarea
                name="message"
                value={form.message}
                className="field-input"
                onChange={handleChange}
                required
                placeholder="メッセージを入力してください"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "送信中..." : "メッセージを送信"}
              <img
                src="/assets/arrow-up.png"
                alt="送信ボタン矢印"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
