import { useState, useEffect } from 'react' // 1. Tambahkan useEffect
import './App.css'
import BalanceBox from './components/BalanceBox'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  // 2. Ubah state awal agar membaca dari localStorage terlebih dahulu.
  // Jika tidak ada data di localStorage, baru pakai data bawaan (array kosong atau dummy).
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('neo_transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : [
      { id: 1, description: '💻 Part-time Job', amount: 150, type: 'income' },
      { id: 2, description: '☕ Coffee', amount: 5, type: 'expense' }
    ]
  })

  // 3. Gunakan useEffect untuk otomatis menyimpan data setiap kali array 'transactions' berubah
  useEffect(() => {
    localStorage.setItem('neo_transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(item => item.id !== id))
  }

  return (
    <div className="container">
      <h1 className="main-title">Personal Finance</h1>
      
      <BalanceBox transactions={transactions} /> 
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
    </div>
  )
}

export default App