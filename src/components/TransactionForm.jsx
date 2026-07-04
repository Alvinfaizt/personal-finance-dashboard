import { useState } from 'react'

function TransactionForm({ onAddTransaction, currency }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')
  const [category, setCategory] = useState('Salary')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !amount) return
    
    onAddTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category: type === 'expense' ? category : 'Salary'
    })

    setDescription('')
    setAmount('')
  }

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
        ✍️ Log Financial Act
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Description</label>
          <input 
            type="text" 
            className="neo-input" 
            placeholder="e.g., Steam Summer Sale" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Amount ({currency === 'USD' ? '$' : 'Rp'})</label>
          <input 
            type="number" 
            className="neo-input" 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Flow Type</label>
            <select className="neo-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          {type === 'expense' && (
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Category</label>
              <select className="neo-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">☕ Food & Drink</option>
                <option value="Gaming">🎮 Gaming</option>
                <option value="Bills">💼 Bills</option>
                <option value="Other">📦 Other</option>
              </select>
            </div>
          )}
        </div>
        <button type="submit" className="neo-btn">Insert Transaction Record</button>
      </form>
    </div>
  )
}

export default TransactionForm