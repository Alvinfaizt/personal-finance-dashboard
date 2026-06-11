import { useState } from 'react'

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')
  const [category, setCategory] = useState('💼 Salary') // Default kategori

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount) {
      alert('Please fill out all fields!')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category // Masukkan kategori ke dalam data objek
    }

    onAddTransaction(newTransaction)
    setDescription('')
    setAmount('')
    setCategory('💼 Salary') // Reset kategori ke default setelah transaksi ditambahkan
  }

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontWeight: 900, textTransform: 'uppercase' }}>Add New Transaction</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 800 }}>Description</label>
          <input 
            type="text" 
            className="neo-input"
            placeholder="e.g., Steam Spring Sale" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 800 }}>Amount ($)</label>
            <input 
              type="number" 
              className="neo-input"
              placeholder="0.00" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 800 }}>Type</label>
            <select className="neo-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 800 }}>Category</label>
          <select className="neo-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {type === 'income' ? (
              <>
                <option value="💼 Salary">💼 Salary</option>
                <option value="📈 Investment">📈 Investment</option>
                <option value="🛠️ Freelance">🛠️ Freelance</option>
                <option value="🎁 Others">🎁 Others</option>
              </>
            ) : (
              <>
                <option value="🎮 Gaming/Steam">🎮 Gaming/Steam</option>
                <option value="☕ Food & Drink">☕ Food & Drink</option>
                <option value="💻 Gadget/Hardware">💻 Gadget/Hardware</option>
                <option value="🏠 Rent/Bill">🏠 Rent/Bill</option>
                <option value="🛒 Others">🛒 Others</option>
              </>
            )}
          </select>
        </div>

        <button type="submit" className="neo-btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm