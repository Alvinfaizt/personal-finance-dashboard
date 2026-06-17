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
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '8px 14px',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '20px',
          color: '#475569',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.85rem',
          boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
          display: 'block'
        }}
      >
        ⬅️ Kembali ke Beranda
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