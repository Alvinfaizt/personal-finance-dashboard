import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceBox from './BalanceBox'
import TransactionForm from './TransactionForm'
import FinancialChart from './FinancialChart'
import TransactionList from './TransactionList'
import BudgetTracker from './BudgetTracker'

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

  // State untuk menyimpan batas anggaran bulanan
  const [budgetLimit, setBudgetLimit] = useState(0)

  return (
    <div>
      {/* Tombol Navigasi Kembali ke Beranda */}
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'transparent',
          border: 'none',
          padding: '0 0 8px 0',
          borderRadius: '0',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '30px',
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

      <div className="currency-bar">
        <button className={`btn-currency ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>USD ($)</button>
        <button className={`btn-currency ${currency === 'IDR' ? 'active' : ''}`} onClick={() => setCurrency('IDR')}>IDR (Rp)</button>
      </div>

      {errorMessage && <div className="neo-alert-danger">{errorMessage}</div>}

      <BalanceBox transactions={transactions} formatMoney={formatMoney} />

      {/* Komponen Pelacak Anggaran Baru */}
      <BudgetTracker
        transactions={transactions}
        budgetLimit={budgetLimit}
        setBudgetLimit={setBudgetLimit}
        formatMoney={formatMoney}
        currency={currency}
      />

      <TransactionForm onAddTransaction={addTransaction} currency={currency} />
      <FinancialChart transactions={transactions} currency={currency} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} formatMoney={formatMoney} />
    </div>
  )
}

export default Dashboard