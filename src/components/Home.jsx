import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="neo-box" style={{ textAlign: 'center', padding: '40px 20px', marginTop: '40px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '10px' }}>💳</div>
            <h1 style={{
                margin: '0 0 10px 0',
                fontSize: '2.2rem',
                fontWeight: 800,
                background: 'linear-gradient(to right, #4f46e5, #9333ea)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                NeoFinance
            </h1>
            <p style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', margin: '0 0 30px 0', lineHeight: '1.5' }}>
                Kelola pemasukan, pantau pengeluaran, dan analisis grafik keuanganmu dalam satu ekosistem antarmuka kaca yang modern dan responsif.
            </p>

            <button className="neo-btn" onClick={() => navigate('/dashboard')} style={{ maxWidth: '280px', margin: '0 auto' }}>
                Buka Dashboard 🚀
            </button>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(255,255,255,0.4)', padding: '10px 15px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>
                    💾 Local Storage Active
                </div>
                <div style={{ background: 'rgba(255,255,255,0.4)', padding: '10px 15px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>
                    📊 Live Recharts
                </div>
                <div style={{ background: 'rgba(255,255,255,0.4)', padding: '10px 15px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>
                    💱 IDR / USD Toggle
                </div>
            </div>
        </div>
    )
}

export default Home