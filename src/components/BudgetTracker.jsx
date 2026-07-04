function BudgetTracker({ transactions, budgetLimit, setBudgetLimit, formatMoney, currency }) {
  const currentExpense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((acc, item) => acc + item.amount, 0)

  const isOverBudget = budgetLimit > 0 && currentExpense > budgetLimit
  const progressPercentage = budgetLimit > 0 ? Math.min((currentExpense / budgetLimit) * 100, 100) : 0

  return (
    <div className={isOverBudget ? "neo-box-danger" : "neo-box"}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem', fontWeight: 700, color: isOverBudget ? '#991b1b' : 'var(--text-main)' }}>
        🎯 Target Budget Constraint
      </h3>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <input 
          type="number" 
          className="neo-input" 
          style={{ marginTop: 0 }}
          placeholder="Set boundary limit..." 
          value={budgetLimit || ''} 
          onChange={(e) => setBudgetLimit(parseFloat(e.target.value) || 0)} 
        />
      </div>
      {budgetLimit > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: isOverBudget ? '#991b1b' : 'var(--text-muted)' }}>
            <span>Used: {formatMoney(currentExpense)}</span>
            <span>Limit: {formatMoney(budgetLimit)}</span>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: isOverBudget ? 'rgba(239, 68, 68, 0.2)' : 'var(--border-color)', borderRadius: '99px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: isOverBudget ? '#ef4444' : 'var(--text-main)', transition: 'width 0.4s ease' }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default BudgetTracker