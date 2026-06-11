import { useState } from 'react'

function TransactionList({ transactions, onDeleteTransaction, formatMoney }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTransactions = transactions.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontWeight: 900, textTransform: 'uppercase' }}>Transaction History</h3>
      <input type="text" className="neo-input" placeholder="🔍 Search transaction..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ marginBottom: '20px' }} />
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {filteredTransactions.map((item) => (
          <li key={item.id} className="neo-list-item">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700 }}>{item.description}</span>
              <span className="neo-badge" style={{ marginTop: '5px' }}>{item.category}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                backgroundColor: item.type === 'income' ? '#a3e635' : '#f87171', 
                border: '2px solid #1a1a1a', padding: '6px 10px', fontWeight: 800, marginRight: '15px'
              }}>
                {item.type === 'income' ? '+' : '-'}{formatMoney(item.amount)}
              </span>
              <button onClick={() => onDeleteTransaction(item.id)} className="neo-btn-delete">X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TransactionList