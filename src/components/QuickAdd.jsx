function QuickAdd({ onAddTransaction }) {
  const injectCoffee = () => {
    onAddTransaction({ id: Date.now(), description: 'Instant Coffee Pack', amount: 5, type: 'expense', category: 'Food' });
  };

  return (
    <div className="neo-box" style={{ padding: '16px 20px', marginBottom: '24px' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>⚡ Macro Commands</span>
      <div style={{ marginTop: '10px' }}>
        <button onClick={injectCoffee} style={{ background: 'var(--border-color)', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: 600, cursor: 'pointer' }}>
          + Quick Coffee Expense ($5)
        </button>
      </div>
    </div>
  )
}
export default QuickAdd;