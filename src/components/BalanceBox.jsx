function BalanceBox({ transactions, formatMoney }) {
  const income = transactions.filter(item => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
  const expense = transactions.filter(item => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);
  const balance = income - expense;
  const isDeficit = balance <= 0;

  return (
    <div className={isDeficit ? "neo-box-danger" : "neo-box"} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {isDeficit ? "⚠️ System Deficit" : "Current Balance"}
        </span>
        <h1 style={{ margin: '4px 0 0 0', fontSize: '2.8rem', fontWeight: 800, color: '#0f172a' }}>
          {formatMoney(balance)}
        </h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.15)', padding: '12px', borderRadius: '12px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a' }}>INCOME</span>
          <h3 style={{ margin: '4px 0 0 0', fontWeight: 700, color: '#15803d' }}>+{formatMoney(income)}</h3>
        </div>

        <div style={{ flex: 1, backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.15)', padding: '12px', borderRadius: '12px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626' }}>EXPENSE</span>
          <h3 style={{ margin: '4px 0 0 0', fontWeight: 700, color: '#b91c1c' }}>-{formatMoney(expense)}</h3>
        </div>
      </div>
    </div>
  )
}
export default BalanceBox