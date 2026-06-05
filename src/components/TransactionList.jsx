// 1. Tangkap onDeleteTransaction dari props
function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Transaction History</h3>
      
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {transactions.length === 0 && <p style={{ color: '#777' }}>No transactions found.</p>}

        {transactions.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '10px', 
              borderBottom: '1px solid #eee', 
              backgroundColor: '#fdfdfd', 
              marginBottom: '5px' 
            }}
          >
            <span style={{ flexGrow: 1 }}>{item.description}</span>
            <span style={{ 
              color: item.type === 'income' ? '#2ecc71' : '#e74c3c', 
              fontWeight: 'bold', 
              marginRight: '15px' 
            }}>
              {item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}
            </span>
            
            {/* 2. Pasang fungsi onClick untuk mengeksekusi penghapusan */}
            <button 
              onClick={() => onDeleteTransaction(item.id)}
              style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
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