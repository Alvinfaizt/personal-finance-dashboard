function TransactionForm() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Add New Transaction</h3>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          <input type="text" placeholder="e.g., Monthly Allowance" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Amount ($)</label>
          <input type="number" placeholder="0.00" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Type</label>
          <select style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
            <option value="income">Income (Uang Masuk)</option>
            <option value="expense">Expense (Uang Keluar)</option>
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm