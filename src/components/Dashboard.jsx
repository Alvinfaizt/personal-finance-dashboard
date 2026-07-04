import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceBox from './BalanceBox'
import TransactionForm from './TransactionForm'
import FinancialChart from './FinancialChart'
import TransactionList from './TransactionList'
import BudgetTracker from './BudgetTracker'
import CategoryChart from './CategoryChart'
import ThemeSwitcher from './ThemeSwitcher'

function Dashboard({ 
  currency, 
  setCurrency, 
  errorMessage, 
  transactions, 
  formatMoney, 
  addTransaction, 
  deleteTransaction 
}) {
  const navigate = useNavigate()
  const [budgetLimit, setBudgetLimit] = useState(0)

  // Menghitung total volume transaksi untuk hiasan statistik ringkas
  const totalTransactionsCount = transactions.length;

  return (
    <div className="container">
      
      {/* HEADER UTILITAS: Tombol Kembali & Hiasan Status Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{
            background: 'transparent',
            border: 'none',
            padding: '0',
            fontWeight: 600,
            cursor: 'pointer',
            color: '#64748b',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#64748b';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span style={{ fontSize: '1rem', lineHeight: '0' }}>←</span> Back to Overview
        </button>

        {/* HIASAN 1: Status Live Node / Local Storage Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '20px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            display: 'inline-block',
            boxShadow: '0 0 8px #22c55e'
          }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            Storage Active
          </span>
        </div>
      </div>

      {/* BAR MATA UANG */}
      <div className="currency-bar">
        <button className={`btn-currency ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>USD ($)</button>
        <button className={`btn-currency ${currency === 'IDR' ? 'active' : ''}`} onClick={() => setCurrency('IDR')}>IDR (Rp)</button>
      </div>

      {errorMessage && <div className="neo-alert-danger">{errorMessage}</div>}
      
      {/* UTAMA: Tampilan Saldo */}
      <BalanceBox transactions={transactions} formatMoney={formatMoney} /> 

      {/* HIASAN 2: Mini Insight Row (Informasi Tambahan Estetik) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <div className="neo-box" style={{ margin: 0, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#64748b' }}>Total Logs</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '6px' }}>
            {totalTransactionsCount} items
          </span>
        </div>
        <div className="neo-box" style={{ margin: 0, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#64748b' }}>System Status</span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a' }}>● Operational</span>
        </div>
      </div>

      {/* Komponen Batas Anggaran */}
      <BudgetTracker 
        transactions={transactions} 
        budgetLimit={budgetLimit} 
        setBudgetLimit={setBudgetLimit} 
        formatMoney={formatMoney}
        currency={currency}
      />

      {/* Form Tambah Transaksi */}
      <TransactionForm onAddTransaction={addTransaction} currency={currency} />
      
      {/* Grafik Kembar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        <FinancialChart transactions={transactions} currency={currency} />
        <CategoryChart transactions={transactions} />
      </div>

      {/* Riwayat Daftar Transaksi */}
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} formatMoney={formatMoney} />
    </div>
  )
}

export default Dashboard