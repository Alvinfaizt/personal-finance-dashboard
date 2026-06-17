import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chartjs-2'

// Daftarkan komponen Chart.js yang dibutuhkan
ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryChart({ transactions }) {
  // 1. Filter hanya transaksi pengeluaran (expense)
  const expenses = transactions.filter(item => item.type === 'expense');

  // 2. Hitung total per kategori secara dinamis
  const categoryTotals = expenses.reduce((acc, item) => {
    const cat = item.category || 'Uncategorized';
    acc[cat] = (acc[cat] || 0) + item.amount;
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const dataValues = Object.values(categoryTotals);

  // 3. Konfigurasi Data Grafik dengan palet warna Clean Tech (Abu-abu, Hitam, dan aksen lembut)
  const data = {
    labels: labels,
    datasets: [
      {
        label: ' Total Spent',
        data: dataValues,
        backgroundColor: [
          '#0f172a', // Hitam Solid (Utama)
          '#475569', // Abu-abu Gelap
          '#94a3b8', // Abu-abu Terang
          '#cbd5e1', // Slate Soft
          '#e2e8f0', // Border Soft
        ],
        borderWidth: 2,
        borderColor: '#ffffff', // Garis potong antar donat warna putih bersih
        hoverOffset: 4
      },
    ],
  };

  // 4. Konfigurasi Opsi Tampilan Grafik
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
            weight: 500
          },
          color: '#475569'
        }
      },
      tooltip: {
        bodyFont: {
          family: "'Inter', sans-serif"
        },
        titleFont: {
          family: "'Inter', sans-serif"
        }
      }
    }
  };

  return (
    <div className="neo-box" style={{ margin: 0, display: 'flex', flexDirection: 'column', height: '320px' }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>
        📦 Expense by Category
      </h3>
      
      <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%' }}>
        {expenses.length > 0 ? (
          <Doughnut data={data} options={options} />
        ) : (
          <div style={{ 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '0.85rem',
            color: '#94a3b8',
            fontStyle: 'italic'
          }}>
            No expense data available to track.
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryChart