function SavingsRate({ transactions }) {
  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  
  const savings = income - expense
  const rate = income > 0 ? Math.max(0, Math.round((savings / income) * 100)) : 0

  return (
    <div className="neo-box" style={{ margin: 0, padding: '16px 20px' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
        📈 Net Savings Velocity
      </span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
        <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>{rate}%</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>of income saved</span>
      </div>
    </div>
  )
}
export default SavingsRate