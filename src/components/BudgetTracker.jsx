import { useState } from 'react'

function BudgetTracker({ transactions, budgetLimit, setBudgetLimit, formatMoney, currency }) {
  const [inputVal, setInputVal] = useState('')

  // Hitung total pengeluaran dari transaksi yang bertipe 'expense'
  const totalExpense = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  // Jalankan pengaturan budget saat tombol di-klik
  const handleSetBudget = (e) => {
    e.preventDefault();
    const num = parseFloat(inputVal);
    if (!isNaN(num) && num >= 0) {
      setBudgetLimit(num);
    }
  };

  // Hitung persentase pemakaian budget
  const percentage = budgetLimit > 0 ? Math.min((totalExpense / budgetLimit) * 100, 100) : 0;
  const isOverBudget = totalExpense > budgetLimit;

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
        🎯 Monthly Budget Limiter
      </h3>

      {/* Form Input Anggaran */}
      <form onSubmit={handleSetBudget} style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>
            Set Expense Limit ({currency})
          </label>
          <input 
            type="number" 
            className="neo-input" 
            placeholder="e.g. 500" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            style={{ marginTop: '4px' }}
          />
        </div>
        <button 
          type="submit" 
          className="neo-btn" 
          style={{ width: 'auto', padding: '11px 20px', marginTop: 0 }}
        >
          Apply
        </button>
      </form>

      {/* Tampilan Progress Bar jika Budget Limit sudah diatur (> 0) */}
      {budgetLimit > 0 ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 500, marginBottom: '6px' }}>
            <span style={{ color: '#64748b' }}>
              Used: <strong style={{ color: '#0f172a' }}>{formatMoney(totalExpense)}</strong> of {formatMoney(budgetLimit)}
            </span>
            <span style={{ fontWeight: 700, color: isOverBudget ? '#dc2626' : '#0f172a' }}>
              {percentage.toFixed(0)}%
            </span>
          </div>

          {/* Track Bar luar */}
          <div style={{ width: '100%', height: '8px', backgroundColor: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
            {/* Indikator Bar dalam */}
            <div 
              style={{ 
                width: `${percentage}%`, 
                height: '100%', 
                backgroundColor: isOverBudget ? '#ef4444' : '#0f172a', 
                borderRadius: '999px',
                transition: 'width 0.4s ease-out, background-color 0.3s ease'
              }}
            />
          </div>

          {/* Notifikasi Peringatan jika Over Budget */}
          {isOverBudget && (
            <p style={{ margin: '10px 0 0 0', fontSize: '0.8rem', color: '#dc2626', fontWeight: 600 }}>
              ⚠️ Warning: You have exceeded your monthly budget limit!
            </p>
          )}
        </div>
      ) : (
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>
          No budget limit set for this month yet.
        </p>
      )}
    </div>
  )
}

export default BudgetTracker