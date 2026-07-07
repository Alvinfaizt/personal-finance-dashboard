function FinancialTip() {
  const tips = [
    "Keep your micro-spending checked to control budget overflow.",
    "Allocate a portion of your income straight to secure digital assets.",
    "Always audit your system transaction history logs once a week."
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="neo-box" style={{ padding: '16px 20px', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
      💡 <span style={{ fontWeight: 600 }}>Tip:</span> {randomTip}
    </div>
  )
}
export default FinancialTip;