import { useState } from 'react'
import TransactionFilter from './TransactionFilter'

function TransactionList({ transactions, onDeleteTransaction, formatMoney, setTransactions }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTransactions = transactions.filter(item => {
    if (activeFilter === 'all') return true
    return item.type === activeFilter
  })

  // LOGIKA FITUR 1: Ekspor ke format CSV (Excel)
  const handleExportCSV = () => {
    if (transactions.length === 0) {
      alert("No data available to export.");
      return;
    }
    
    const headers = ["Description", "Amount", "Type", "Category"];
    const rows = transactions.map(item => [
      `"${item.description}"`,
      item.amount,
      item.type,
      item.category
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "neofinance_statement.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // LOGIKA FITUR 2: Reset Total Data
  const handleResetAll = () => {
    const confirmReset = window.confirm("Are you absolutely sure you want to wipe out all financial records?");
    if (confirmReset) {
      setTransactions([]); // Mengosongkan state utama
      localStorage.removeItem('transactions'); // Membersihkan localStorage
    }
  };

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
        📜 Financial Logs History
      </h3>
      
      <TransactionFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {filteredTransactions.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', margin: '20px 0' }}>No logs found.</p>
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

      {/* PANEL AKSI UTENSIL (Dua Fitur Baru) */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '24px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
        <button className="btn-export" onClick={handleExportCSV} style={{ flex: 1 }}>
          📥 Export Statement (.CSV)
        </button>
        <button 
          onClick={handleResetAll} 
          style={{
            flex: 1,
            padding: '6px 12px',
            background: 'transparent',
            border: '1px solid rgba(220, 38, 38, 0.2)',
            color: '#dc2626',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.75rem',
            border_radius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          🗑️ Wipe Dashboard Data
        </button>
      </div>
    </div>
  )
}

export default TransactionList