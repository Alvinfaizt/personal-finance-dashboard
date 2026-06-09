import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function FinancialChart({ transactions }) {
  // 1. Hitung total pemasukan dan pengeluaran
  const income = transactions
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const expense = transactions
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  // 2. Format data agar bisa dibaca oleh Recharts
  const data = [
    { name: 'Income', amount: income, color: '#a3e635' }, // Hijau neon
    { name: 'Expense', amount: expense, color: '#f87171' } // Merah neon
  ];

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 20px 0', fontWeight: 900, textTransform: 'uppercase' }}>Cashflow Chart</h3>
      
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            {/* Berikan gaya teks tebal pada Axis grafik */}
            <XAxis dataKey="name" stroke="#1a1a1a" tick={{ fontWeight: 700 }} />
            <YAxis stroke="#1a1a1a" tick={{ fontWeight: 700 }} />
            
            {/* Tooltip kaku neubrutalism saat grafik di-hover */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '3px solid #1a1a1a', 
                borderRadius: '0px',
                fontWeight: 800 
              }} 
            />
            
            {/* Batang Grafik dengan Border Hitam Tebal */}
            <Bar dataKey="amount" stroke="#1a1a1a" strokeWidth={3}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FinancialChart