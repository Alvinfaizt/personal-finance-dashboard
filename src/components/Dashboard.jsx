import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BalanceBox from './BalanceBox'
import TransactionForm from './TransactionForm'
import FinancialChart from './FinancialChart'
import TransactionList from './TransactionList'
import BudgetTracker from './BudgetTracker'
import CategoryChart from './CategoryChart'
import ThemeSwitcher from './ThemeSwitcher'
import SavingsRate from './SavingsRate'

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
  const totalTransactionsCount = transactions.length

  return (
    <div className="container">
      
      {/* HEADER UTILITAS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => navigate('/')} 
          style={{
            background: 'transparent',
            border: 'none',
            padding: '0',
            fontWeight: 600,
            cursor: 'pointer',
            color: 'var(--text-muted)',
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
            e.currentTarget.style.color = 'var(--text-main)';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <span style={{ fontSize: '1rem', lineHeight: '0' }}>←</span> Back to Overview
        </button>

        {/* STATUS OPERASIONAL */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--border-color)', padding: '6px 12px', borderRadius: '20px' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            Storage Active
          </span>
        </div>
      </div>

      {/* FIXED BAR MATA UANG */}
      <div className="currency-bar">
        <button className={`btn-currency ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>USD</button>
        <button className={`btn-currency ${currency === 'IDR' ? 'active' : ''}`} onClick={() => setCurrency('IDR')}>IDR</button>
      </div>

      {/* SAKLAR INTERFASIAL TEMA */}
      <ThemeSwitcher />

      {errorMessage && <div className="neo-alert-danger">{errorMessage}</div>}
      
      <BalanceBox transactions={transactions} formatMoney={formatMoney} /> 

      {/* DUA KOLOM METRIK WIDGET HIASAN */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
        <div className="neo-box" style={{ margin: 0, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Logs</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>{totalTransactionsCount} items</span>
        </div>
        <SavingsRate transactions={transactions} />
      </div>

      <BudgetTracker 
        transactions={transactions} 
        budgetLimit={budgetLimit} 
        setBudgetLimit={setBudgetLimit} 
        formatMoney={formatMoney}
        currency={currency}
      />

      <TransactionForm onAddTransaction={addTransaction} currency={currency} />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <FinancialChart transactions={transactions} currency={currency} />
        <CategoryChart transactions={transactions} />
      </div>

      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} formatMoney={formatMoney} setTransactions={setTransactions} />
    </div>
  )
}
export default Dashboard