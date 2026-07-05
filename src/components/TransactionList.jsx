import { useState } from 'react'
import TransactionFilter from './TransactionFilter'

function TransactionList({ transactions, onDeleteTransaction, formatMoney }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTransactions = transactions.filter(item => {
    if (activeFilter === 'all') return true
    return item.type === activeFilter
  })

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
        📜 Financial Logs History
      </h3>
      
      <TransactionFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {filteredTransactions.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>No logs found.</p>
      ) : (
        filteredTransactions.map((item) => (
          <div key={item.id} className="neo-list-item">
            <div>
              <span style={{ fontWeight: 600, display: 'block' }}>{item.description}</span>
              <span className="neo-badge">{item.category}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontWeight: 700, color: item.type === 'income' ? '#16a34a' : '#dc2626' }}>
                {item.type === 'income' ? '+' : '-'} {formatMoney(item.amount)}
              </span>
              <button className="neo-btn-delete" onClick={() => onDeleteTransaction(item.id)}>×</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
export default TransactionList