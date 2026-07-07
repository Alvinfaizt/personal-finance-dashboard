function MetricCards({ transactions, formatMoney }) {
  const expenses = transactions.filter(t => t.type === 'expense');
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const avgExpense = expenses.length > 0 ? Math.round(totalExpense / expenses.length) : 0;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
      <div className="neo-box" style={{ margin: 0, padding: '16px 20px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg. Expense</span>
        <h4 style={{ margin: '8px 0 0 0', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>{formatMoney(avgExpense)}</h4>
      </div>
      <div className="neo-box" style={{ margin: 0, padding: '16px 20px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Logs</span>
        <h4 style={{ margin: '8px 0 0 0', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>{transactions.length} items</h4>
      </div>
    </div>
  )
}
export default MetricCards;