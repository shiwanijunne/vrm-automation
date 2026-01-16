import { useState } from "react";

export default function CreateTemplate() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", type: "Yes/No", required: false },
    ]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Template</h2>

      <input placeholder="Template Name" /><br /><br />
      <select>
        <option>Security</option>
        <option>Privacy</option>
        <option>Compliance</option>
      </select><br /><br />

      <textarea placeholder="Description"></textarea><br /><br />

      <h3>Questions</h3>

      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            placeholder="Question text"
            value={q.text}
          />
          <select>
            <option>Yes/No</option>
            <option>Text</option>
          </select>
          <label>
            <input type="checkbox" /> Required
          </label>
        </div>
      ))}

      <button onClick={addQuestion}>+ Add Question</button><br /><br />
      <button>Create Template</button>
    </div>
  );
}