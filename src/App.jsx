import { useState, useEffect } from 'react'
import './App.css'
import BalanceBox from './components/BalanceBox'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import FinancialChart from './components/FinancialChart'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('neo_transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, description: '💼 Part-time Job', amount: 150, type: 'income', category: '💼 Salary' },
      { id: 2, description: '☕ Coffee', amount: 5, type: 'expense', category: '☕ Food & Drink' }
    ]
  })

  // State baru untuk menampung pesan error validasi
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('neo_transactions', JSON.stringify(transactions))
  }, [transactions])

  // Hitung saldo saat ini secara real-time untuk validasi
  const currentIncome = transactions.filter(t => t.type === 'income').reduce((s, i) => s + i.amount, 0)
  const currentExpense = transactions.filter(t => t.type === 'expense').reduce((s, i) => s + i.amount, 0)
  const currentBalance = currentIncome - currentExpense

  const addTransaction = (newTx) => {
    // VALIDASI: Jika tipenya pengeluaran DAN nominalnya lebih besar dari saldo saat ini
    if (newTx.type === 'expense' && newTx.amount > currentBalance) {
      setErrorMessage(`❌ TRANSACTION DENIED: INSUFFICIENT FUNDS! (YOUR BALANCE IS ONLY $${currentBalance.toFixed(2)})`)

      // Hapus pesan error secara otomatis setelah 4 detik
      setTimeout(() => setErrorMessage(''), 4000)
      return; // Stop fungsi, jangan masukkan data ke state
    }

    // Jika lolos validasi, masukkan transaksi baru
    setTransactions([newTx, ...transactions])
    setErrorMessage('') // Pastikan error bersih
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }

  return (
    <div className="container">
      <h1 className="main-title">Personal Finance</h1>

      {/* JIKA ADA ERROR, MUNCULKAN KOTAK ALERT NEUBRUTALISM */}
      {errorMessage && <div className="neo-alert-danger">{errorMessage}</div>}

      <BalanceBox transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <FinancialChart transactions={transactions} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  )
}

export default App