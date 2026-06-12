import { useState } from 'react'

function TransactionList({ transactions, onDeleteTransaction, formatMoney }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Fungsi Utama untuk Ekspor ke file CSV
  const handleExportCSV = () => {
    if (transactions.length === 0) {
      alert("No data available to export!");
      return;
    }

    // 1. Buat header kolom untuk CSV
    const headers = ['ID', 'Description', 'Amount (USD)', 'Type', 'Category'];

    // 2. Petakan array objek transaksi menjadi baris teks CSV
    const rows = transactions.map(item => [
      item.id,
      `"${item.description.replace(/"/g, '""')}"`, // Bungkus tanda kutip untuk mencegah eror spasi/koma
      item.amount.toFixed(2),
      item.type,
      `"${(item.category || '🛒 General').replace(/"/g, '""')}"`
    ]);

    // 3. Gabungkan header dan baris menggunakan baris baru (\n)
    const csvContent = [
      headers.join(','),
      ...rows.map(e => e.join(','))
    ].join('\n');

    // 4. Buat Blob data dan pemicu link download otomatis di browser
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("download", `neo_finance_export_${Date.now()}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Logika Filter Pencarian
  const filteredTransactions = transactions.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="neo-box">
      {/* HEADER BAGIAN DENGAN TOMBOL EKSPOR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, fontWeight: 900, textTransform: 'uppercase' }}>Transaction History</h3>

        {/* TOMBOL EKSPOR BARU */}
        <button className="btn-export" onClick={handleExportCSV}>
          📥 Export CSV
        </button>
      </div>

      <input
        type="text"
        className="neo-input"
        placeholder="🔍 Search transaction..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {filteredTransactions.length === 0 && (
          <p style={{ color: '#777', fontWeight: 700 }}>No matching transactions found.</p>
        )}

        {filteredTransactions.map((item) => (
          <li key={item.id} className="neo-list-item">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700 }}>{item.description}</span>
              <span className="neo-badge" style={{ marginTop: '5px' }}>{item.category || '🛒 General'}</span>
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