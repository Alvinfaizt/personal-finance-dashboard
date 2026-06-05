import { useState } from 'react' // 1. Impor useState dari React
import BalanceBox from './components/BalanceBox'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  // 2. Buat "State" atau buku catatan kita. 
  // transactions = datanya, setTransactions = fungsi untuk mengubah datanya.
  const [transactions, setTransactions] = useState([
    { id: 1, description: '💻 Part-time Job', amount: 150, type: 'income' },
    { id: 2, description: '☕ Coffee', amount: 5, type: 'expense' }
  ])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Personal Finance Dashboard</h1>
      <hr style={{ marginBottom: '20px' }} />
      
      {/* 3. Kirim data transaksi ke komponen yang membutuhkan lewat "Props" */}
      <BalanceBox transactions={transactions} /> 
      <TransactionForm />
      <TransactionList transactions={transactions} />
      
    </div>
  )
}

export default App