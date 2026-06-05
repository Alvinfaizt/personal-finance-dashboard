import { useState } from 'react'
import './App.css'
import BalanceBox from './components/BalanceBox'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: '💻 Part-time Job', amount: 150, type: 'income' },
    { id: 2, description: '☕ Coffee', amount: 5, type: 'expense' }
  ])

  // FUNGSI BARU: Untuk menerima objek transaksi baru dari form
  const addTransaction = (newTx) => {
    // Kita gabungkan transaksi baru ke dalam array transaksi yang sudah ada
    setTransactions([newTx, ...transactions])
  }

  // FUNGSI BARU: Untuk menghapus transaksi berdasarkan ID
  const deleteTransaction = (id) => {
    // Kita filter array: sisakan semua transaksi yang ID-nya TIDAK SAMA dengan ID yang dihapus
    const updatedTransactions = transactions.filter(item => item.id !== id)
    setTransactions(updatedTransactions)
  }

  return (
    <div className="container">
      <h1 className="main-title">Personal Finance Dashboard</h1>
      <hr className="neo-divider" />

      <BalanceBox transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />

      {/* PERHATIKAN BARIS INI: Apakah onDeleteTransaction sudah ditulis dengan benar? */}
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  )
}

export default App