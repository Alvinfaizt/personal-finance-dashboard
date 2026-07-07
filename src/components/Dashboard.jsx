import { useState, useEffect } from 'react';

// 1. IMPORT SEMUA KOMPONEN BARU
import WelcomeBanner from './WelcomeBanner';
import CryptoTicker from './CryptoTicker';
import MetricCards from './MetricCards';
import SearchBar from './SearchBar';
import QuickAdd from './QuickAdd';
import FinancialTip from './FinancialTip';
import ActivityLog from './ActivityLog';
import ExportPanel from './ExportPanel';
import SystemReset from './SystemReset';

// Import komponen bawaan lama kamu (sesuaikan path-nya jika berbeda)
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function Dashboard() {
  // State bawaan untuk menampung data transaksi
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  // State baru untuk mendukung Fitur 8 (Search Bar)
  const [searchQuery, setSearchQuery] = useState('');

  // Sinkronisasi data ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Fungsi helper global untuk format mata uang
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  // Fungsi aksi untuk menambah transaksi (dipakai form lama & QuickAdd)
  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  // Fungsi aksi untuk menghapus transaksi
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Logika filter deskripsi berdasarkan query dari SearchBar
  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* baris ATAS: Banner Utama */}
      <WelcomeBanner />

      {/* TATA LETAK GRID: Membagi Workspace Menjadi 2 Kolom (Khas Dashboard) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '24px' }}>
        
        {/* KOLOM KIRI: Kontrol Panel & Input */}
        <div className="left-panel" style={{ display: 'flex', flexDirection: 'col', gap: '24px' }}>
          <CryptoTicker />
          
          <div className="neo-box" style={{ padding: '20px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem', fontWeight: 700 }}>➕ New Record Entry</h3>
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>

          <QuickAdd onAddTransaction={handleAddTransaction} />
          <FinancialTip />
          <SystemReset setTransactions={setTransactions} />
        </div>

        {/* KOLOM KANAN: Visualisasi, Metrik, & Database Logs */}
        <div className="right-panel">
          <MetricCards transactions={transactions} formatMoney={formatMoney} />
          
          <div className="neo-box" style={{ padding: '20px', marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1rem', fontWeight: 700 }}>🔍 Filter Engine</h3>
            <SearchBar search={searchQuery} setSearch={setSearchQuery} />
          </div>

          <ExportPanel transactions={transactions} />
          
          {/* Mengirimkan data yang sudah terfilter oleh SearchBar ke list utama */}
          <TransactionList 
            transactions={filteredTransactions} 
            onDeleteTransaction={handleDeleteTransaction}
            formatMoney={formatMoney}
          />
          
          <ActivityLog transactions={transactions} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;