import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

type inputType = { enteredName: { current: { value: string } } };

// Contactぺージのフォーム
function ContactForm() {
  // フォーム入力内容取得
  const enteredName = useRef<HTMLInputElement>(null);
  const enteredEmail = useRef<HTMLInputElement>(null);
  const enteredMessage = useRef<HTMLTextAreaElement>(null);

  // MySQLへの送信状況確認
  const [submitStatus, setSubmitStatus] = useState<string>();

  // MySQLへの送信状況確認の初期化
  useEffect(() => {
    if (submitStatus || !(submitStatus === "Pending")) {
      const timer = setTimeout(() => {
        setSubmitStatus(undefined);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // api/contactを介したMySQLへの問い合わせデータ追加関数
  async function submitDataHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("送信中");
    if (
      !enteredName.current ||
      !enteredEmail.current ||
      !enteredMessage.current ||
      !enteredEmail.current.value.includes("@")
    ) {
      setSubmitStatus("無効な入力です");
      return;
    }
    const submitData = {
      name: enteredName.current.value,
      email: enteredEmail.current.value,
      message: enteredMessage.current.value,
    };
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(submitData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (!response.ok) {
      setSubmitStatus(data.message || "失敗しました");
    }
    setSubmitStatus(data.message || "成功しました!");
  }

  // フォームコンポーネントÏ
  return (
    <div>
            <h1 className="has-text-success is-size-3 has-text-weight-bold has-text-centered my-3">{submitStatus}</h1>
      <form className="box m-6" onSubmit={submitDataHandler}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field m-6">
              <label htmlFor="name" className="label">
                Username
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success is-medium"
                  type="text"
                  id="name"
                  ref={enteredName}
                />
                <span className="icon is-small p-2 is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="icon p-2 is-right">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
            </div>

            <div className="field m-6">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-success is-medium"
                  type="email"
                  id="email"
                  ref={enteredEmail}
                />
                <span className="icon p-2 is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="icon p-2 is-right">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="field m-6">
          <label htmlFor="message" className="label">
            Message
          </label>
          <div className="control">
            <textarea
              name="message"
              id="message"
              className="textarea is-success"
              ref={enteredMessage}
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-centered m-6">
          <div className="control">
            <button className="button is-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
