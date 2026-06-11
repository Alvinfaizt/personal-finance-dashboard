import { useState } from 'react'

function TransactionList({ transactions, onDeleteTransaction }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Logika memfilter transaksi berdasarkan apa yang diketik di search bar
  const filteredTransactions = transactions.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontWeight: 900, textTransform: 'uppercase' }}>Transaction History</h3>
      
      {/* INPUT PENCARIAN (SEARCH BAR) */}
      <div className="search-container">
        <input 
          type="text" 
          className="neo-input" 
          placeholder="🔍 Search transaction or category..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '15px', backgroundColor: '#fafafa' }}
        />
      </div>

      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {filteredTransactions.length === 0 && (
          <p style={{ color: '#777', fontWeight: 700 }}>No matching transactions found.</p>
        )}

        {filteredTransactions.map((item) => (
          <li key={item.id} className="neo-list-item">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
              <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>{item.description}</span>
              {/* Tampilkan kategori jika ada */}
              <div>
                <span className="neo-badge">{item.category || '🛒 General'}</span>
              </div>
            </div>

            <span style={{ 
              backgroundColor: item.type === 'income' ? '#a3e635' : '#f87171', 
              border: '2px solid #1a1a1a',
              padding: '6px 10px',
              fontWeight: 800, 
              marginRight: '15px',
              fontSize: '0.9rem',
              whiteSpace: 'nowrap'
            }}>
              {item.type === 'income' ? '+' : '-'}${item.amount.toFixed(2)}
            </span>
            
            <button onClick={() => onDeleteTransaction(item.id)} className="neo-btn-delete">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList