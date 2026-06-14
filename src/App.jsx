import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  const [currency, setCurrency] = useState('USD')
  const [errorMessage, setErrorMessage] = useState('')

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('neo_transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, description: '💻 Part-time Job', amount: 150, type: 'income', category: '💼 Salary' },
      { id: 2, description: '☕ Coffee', amount: 5, type: 'expense', category: '☕ Food & Drink' }
    ]
  })

  useEffect(() => {
    localStorage.setItem('neo_transactions', JSON.stringify(transactions))
  }, [transactions])

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
    let amountInUSD = newTx.amount
    if (currency === 'IDR') {
      amountInUSD = newTx.amount / 16000
    }

    const finalTx = { ...newTx, amount: amountInUSD }

    if (finalTx.type === 'expense' && finalTx.amount > currentBalance) {
      setErrorMessage(`❌ TRANSACTION DENIED: INSUFFICIENT FUNDS!`)
      setTimeout(() => setErrorMessage(''), 4000)
      return
    }

    setTransactions([finalTx, ...transactions])
    setErrorMessage('')
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }

  return (
    <Router>
      <div className="container">
        <h1 className="main-title">NeoFinance App</h1>

        <Routes>
          {/* Rute Jalan ke Halaman Beranda Utama */}
          <Route path="/" element={<Home />} />

          {/* Rute Jalan ke Halaman Dashboard Kelola Finansial */}
          <Route
            path="/dashboard"
            element={
              <Dashboard
                currency={currency}
                setCurrency={setCurrency}
                errorMessage={errorMessage}
                transactions={transactions}
                formatMoney={formatMoney}
                addTransaction={addTransaction}
                deleteTransaction={deleteTransaction}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App