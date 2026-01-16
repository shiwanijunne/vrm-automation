const templates = [
  {
    id: 1,
    name: "Vendor Security Assessment",
    category: "Security",
    version: "v1",
    questions: 10,
    status: "Active",
  },
  {
    id: 2,
    name: "Data Privacy Questionnaire",
    category: "Privacy",
    version: "v1",
    questions: 6,
    status: "Draft",
  },
];

export default function TemplateList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Template List</h2>
      <button>Create Template</button>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Version</th>
            <th>Questions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.category}</td>
              <td>{t.version}</td>
              <td>{t.questions}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}