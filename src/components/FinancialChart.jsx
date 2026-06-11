import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function FinancialChart({ transactions, currency }) {
  const income = transactions.filter(item => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
  const expense = transactions.filter(item => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);

  // Kalibrasi grafik jika mata uang IDR
  const multiplier = currency === 'IDR' ? 16000 : 1;

  const data = [
    { name: 'Income', amount: income * multiplier, color: '#a3e635' },
    { name: 'Expense', amount: expense * multiplier, color: '#f87171' }
  ];

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 20px 0', fontWeight: 900, textTransform: 'uppercase' }}>Cashflow Chart ({currency})</h3>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <XAxis dataKey="name" stroke="#1a1a1a" tick={{ fontWeight: 700 }} />
            <YAxis stroke="#1a1a1a" tick={{ fontWeight: 700 }} width={80} />
            <Tooltip contentStyle={{ backgroundColor: '#fff', border: '3px solid #1a1a1a', fontWeight: 800 }} />
            <Bar dataKey="amount" stroke="#1a1a1a" strokeWidth={3}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default FinancialChart