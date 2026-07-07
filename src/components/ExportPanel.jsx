function ExportPanel({ transactions }) {
  const downloadCSV = () => {
    if (transactions.length === 0) return alert("No records found");
    const headers = ["Description,Amount,Type,Category"];
    const rows = transactions.map(t => `"${t.description}",${t.amount},${t.type},${t.category}`);
    const blob = new Blob([[headers, ...rows].join("\n")], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'statement.csv';
    a.click();
  };

  return (
    <button className="neo-btn" onClick={downloadCSV} style={{ marginTop: 0, marginBottom: '24px', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
      📥 Export Statement to Spreadsheet (.CSV)
    </button>
  )
}
export default ExportPanel;