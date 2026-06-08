function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontWeight: 900, textTransform: 'uppercase' }}>Transaction History</h3>
      
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {transactions.length === 0 && <p style={{ color: '#777', fontWeight: 700 }}>No transactions found.</p>}

        {transactions.map((item) => (
          <li key={item.id} className="neo-list-item">
            <span style={{ flexGrow: 1, fontWeight: 700 }}>{item.description}</span>
            <span style={{ 
              backgroundColor: item.type === 'income' ? '#a3e635' : '#f87171', 
              border: '2px solid #1a1a1a',
              padding: '4px 8px',
              fontWeight: 800, 
              marginRight: '15px',
              fontSize: '14px'
            }}>
              {item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}
            </span>
            <button 
              onClick={() => onDeleteTransaction(item.id)}
              className="neo-btn-delete"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList