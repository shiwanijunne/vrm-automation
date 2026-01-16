import { useState } from "react";

export default function Questionnaire() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});

  const totalQuestions = questionnaire.reduce(
    (sum, sec) => sum + sec.questions.length,
    0
  );
  const answeredCount = Object.values(answers).filter(a => a).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  const handleAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const saveDraft = () => {
    console.log("Draft saved:", answers);
    alert("Draft saved successfully ✅");
  };

  const nextSection = () => {
    if (currentSection < questionnaire.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const section = questionnaire[currentSection];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Questionnaire</h2>

      {/* Progress */}
      <div style={{ marginBottom: "20px" }}>
        <label>Progress: {progress}%</label>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ccc",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "5px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "10px",
              background: "#3b82f6",
            }}
          />
        </div>
      </div>

      {/* Section */}
      <h3>Section: {section.section}</h3>
      {section.questions.map(q => (
        <div key={q.id} style={{ marginBottom: "10px" }}>
          <p>{q.text} {q.required && "*"}</p>
          <input
            type="text"
            value={answers[q.id] || ""}
            onChange={e => handleAnswer(q.id, e.target.value)}
          />
        </div>
      ))}

      {/* Navigation */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevSection} disabled={currentSection === 0}>
          Previous
        </button>
        <button
          onClick={nextSection}
          disabled={currentSection === questionnaire.length - 1}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
        <button onClick={saveDraft} style={{ marginLeft: "10px" }}>
          Save Draft
        </button>
      </div>
    </div>
  );
}