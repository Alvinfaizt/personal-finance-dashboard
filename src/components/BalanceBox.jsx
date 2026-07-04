function BalanceBox({ transactions, formatMoney }) {
  const income = transactions
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => acc + item.amount, 0)

  const expense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((acc, item) => acc + item.amount, 0)

  const totalBalance = income - expense

  return (
    <div className="neo-box" style={{ textAlign: 'center', marginBottom: '24px' }}>
      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Current Balance
      </span>
      <h1 style={{ fontSize: '2.8rem', fontWeight: 800, margin: '12px 0', color: 'var(--text-main)', letterSpacing: '-0.04em' }}>
        {formatMoney(totalBalance)}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#16a34a', display: 'block', textTransform: 'uppercase' }}>Income</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{formatMoney(income)}</span>
        </div>
        <div style={{ borderLeft: '1px solid var(--border-color)' }}></div>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#dc2626', display: 'block', textTransform: 'uppercase' }}>Expense</span>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{formatMoney(expense)}</span>
        </div>
      </div>
    </div>
  )
}

export default BalanceBox