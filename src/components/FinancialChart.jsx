import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function FinancialChart({ transactions, currency }) {
  const income = transactions.filter(item => item.type === 'income').reduce((sum, item) => sum + item.amount, 0);
  const expense = transactions.filter(item => item.type === 'expense').reduce((sum, item) => sum + item.amount, 0);

  const multiplier = currency === 'IDR' ? 16000 : 1;

  const data = [
    { name: 'Income', amount: income * multiplier, color: '#22c55e' },
    { name: 'Expense', amount: expense * multiplier, color: '#ef4444' }
  ];

  return (
    <div className="neo-box">
      <h3 style={{ margin: '0 0 20px 0', fontWeight: 700, fontSize: '1.1rem' }}>Cashflow Chart ({currency})</h3>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <XAxis dataKey="name" stroke="#64748b" tick={{ fontWeight: 600, fontSize: '0.85rem' }} />
            <YAxis stroke="#64748b" tick={{ fontWeight: 600, fontSize: '0.85rem' }} width={80} />
            <Tooltip contentStyle={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', fontWeight: 600 }} />
            <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default FinancialChart