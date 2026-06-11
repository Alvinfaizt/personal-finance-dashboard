function BalanceBox({ transactions }) {
  const income = transactions
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const expense = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = income - expense;
  
  // Tentukan apakah saldo sedang kritis atau tidak
  const isDeficit = balance <= 0;

  return (
    // Jika isDeficit true, pakai kelas 'neo-box-danger', jika tidak pakai 'neo-box' biasa
    <div className={isDeficit ? "neo-box-danger" : "neo-box"} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 800, letterSpacing: '1px' }}>
          {isDeficit ? "⚠️ SYSTEM DEFICIT" : "YOUR BALANCE"}
        </h3>
        <h1 style={{ margin: '5px 0 0 0', fontSize: '2.5rem', fontWeight: 900 }}>
          ${balance.toFixed(2)}
        </h1>
        {isDeficit && <p style={{ margin: '5px 0 0 0', fontWeight: 800, fontSize: '12px', color: '#1a1a1a' }}>WARNING: STOP SPENDING!</p>}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
        <div style={{ flex: 1, backgroundColor: '#a3e635', border: '3px solid #1a1a1a', padding: '10px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 800 }}>INCOME</span>
          <h3 style={{ margin: '5px 0 0 0', fontWeight: 900 }}>+${income.toFixed(2)}</h3>
        </div>
        
        <div style={{ flex: 1, backgroundColor: '#ffffff', border: '3px solid #1a1a1a', padding: '10px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 800 }}>EXPENSE</span>
          <h3 style={{ margin: '5px 0 0 0', fontWeight: 900 }}>-${expense.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default BalanceBox