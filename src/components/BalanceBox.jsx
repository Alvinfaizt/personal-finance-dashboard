function BalanceBox({ transactions }) {
  // 1. Hitung Total Pemasukan (Income)
  const income = transactions
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  // 2. Hitung Total Pengeluaran (Expense)
  const expense = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  // 3. Hitung Sisa Saldo (Balance)
  const balance = income - expense;

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px', 
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <div>
        <h3 style={{ margin: 0, color: '#555', fontSize: '16px' }}>Your Balance</h3>
        <h1 style={{ margin: '5px 0 0 0', color: balance >= 0 ? '#2ecc71' : '#e74c3c' }}>
          ${balance.toFixed(2)}
        </h1>
      </div>

      {/* Baris Informasi Pemasukan & Pengeluaran */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <div style={{ flex: 1, backgroundColor: '#ebfbe3', padding: '10px', borderRadius: '6px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Income</span>
          <h3 style={{ margin: '5px 0 0 0', color: '#2ecc71' }}>+${income.toFixed(2)}</h3>
        </div>
        
        <div style={{ flex: 1, backgroundColor: '#fceade', padding: '10px', borderRadius: '6px', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Expense</span>
          <h3 style={{ margin: '5px 0 0 0', color: '#e74c3c' }}>-${expense.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default BalanceBox