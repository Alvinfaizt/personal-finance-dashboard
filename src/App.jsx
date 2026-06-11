import { useState, useEffect } from 'react'
import './App.css'
import BalanceBox from './components/BalanceBox'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import FinancialChart from './components/FinancialChart'

function App() {
  const [currency, setCurrency] = useState('USD') // State mata uang: USD atau IDR

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('neo_transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, description: '💻 Part-time Job', amount: 150, type: 'income', category: '💼 Salary' },
      { id: 2, description: '☕ Coffee', amount: 5, type: 'expense', category: '☕ Food & Drink' }
    ]
  })

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('neo_transactions', JSON.stringify(transactions))
  }, [transactions])

  // Fungsi helper global untuk memformat angka sesuai mata uang pilihan
  const formatMoney = (val) => {
    if (currency === 'IDR') {
      return 'Rp' + (val * 16000).toLocaleString('id-ID')
    }
    return '$' + val.toFixed(2)
  }

  const currentIncome = transactions.filter(t => t.type === 'income').reduce((s, i) => s + i.amount, 0)
  const currentExpense = transactions.filter(t => t.type === 'expense').reduce((s, i) => s + i.amount, 0)
  const currentBalance = currentIncome - currentExpense

  const addTransaction = (newTx) => {
    // Jika user menginput saat mode IDR, kita konversi nominalnya kembali ke USD sebelum masuk database lokal
    let amountInUSD = newTx.amount
    if (currency === 'IDR') {
      amountInUSD = newTx.amount / 16000
    }

    const adjustedTx = { ...newTx, amount: amountInUSD }

    if (adjustedTx.type === 'expense' && adjustedTx.amount > currentBalance) {
      setErrorMessage(`❌ TRANSACTION DENIED: INSUFFICIENT FUNDS!`)
      setTimeout(() => setErrorMessage(''), 4000)
      return
    }

    setTransactions([adjustedTx, ...transactions])
    setErrorMessage('')
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }

  return (
    <div className="container">
      <h1 className="main-title">💲 NEO DASHBOARD 💲</h1>

      {/* TOMBOL TOGGLE PERGANTIAN MATA UANG */}
      <div className="currency-bar">
        <button className={`btn-currency ${currency === 'USD' ? 'active' : ''}`} onClick={() => setCurrency('USD')}>USD ($)</button>
        <button className={`btn-currency ${currency === 'IDR' ? 'active' : ''}`} onClick={() => setCurrency('IDR')}>IDR (Rp)</button>
      </div>

      {errorMessage && <div className="neo-alert-danger">{errorMessage}</div>}

      {/* Oper fungsi formatMoney ke anak komponen */}
      <BalanceBox transactions={transactions} formatMoney={formatMoney} />
      <TransactionForm onAddTransaction={addTransaction} currency={currency} />
      <FinancialChart transactions={transactions} currency={currency} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} formatMoney={formatMoney} />
    </div>
  )
}

export default App