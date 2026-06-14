import { useNavigate } from 'react-router-dom'
import BalanceBox from './BalanceBox'
import TransactionForm from './TransactionForm'
import FinancialChart from './FinancialChart'
import TransactionList from './TransactionList'

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

  return (
    <div>
      {/* Tombol Navigasi Kembali ke Beranda */}
      <button 
        onClick={() => navigate('/')} 
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
          border: '1px solid rgba(0,0,0,0.05)',
          padding: '8px 14px',
          borderRadius: '10px',
          fontWeight: 600,
          cursor: 'pointer', /* Sudah diperbaiki dengan tanda kutip */
          marginBottom: '20px',
          color: '#475569',
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
      <TransactionForm onAddTransaction={addTransaction} currency={currency} />
      <FinancialChart transactions={transactions} currency={currency} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} formatMoney={formatMoney} />
    </div>
  )
}

export default Dashboard