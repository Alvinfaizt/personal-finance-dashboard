import { useState } from 'react'

// 1. Tangkap onAddTransaction dari props
function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  // 2. Buat fungsi handling ketika tombol diklik
  const handleSubmit = (e) => {
    e.preventDefault() // Mencegah browser refresh halaman

    // Validasi sederhana: jangan biarkan input kosong
    if (!description || !amount) {
      alert('Please fill out all fields!')
      return
    }

    // Racik data menjadi objek transaksi baru
    const newTransaction = {
      id: Date.now(), // membuat ID unik menggunakan timestamp waktu saat ini
      description: description,
      amount: parseFloat(amount), // ubah teks angka menjadi tipe data number asli
      type: type
    }

    // 3. Kirim objek ini ke fungsi milik App.jsx lewat props
    onAddTransaction(newTransaction)

    // 4. Kosongkan kembali form input setelah sukses menambah data
    setDescription('')
    setAmount('')
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3 style={{ margin: '0 0 15px 0' }}>Add New Transaction</h3>
      
      {/* 5. Pasang fungsi handleSubmit ke tag form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
          {/* 3. Ikat value ke state dan ubah state setiap kali user mengetik (onChange) */}
          <input 
            type="text" 
            placeholder="e.g., Monthly Allowance" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Amount ($)</label>
          <input 
            type="number" 
            placeholder="0.00" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Type</label>
          <select 
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm