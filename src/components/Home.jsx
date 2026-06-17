import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HERO SECTION */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ 
          backgroundColor: '#f1f5f9', 
          color: '#475569', 
          padding: '6px 16px', 
          borderRadius: '99px', 
          fontSize: '0.8rem', 
          fontWeight: 600,
          letterSpacing: '0.05em'
        }}>
          ✨ INTRODUCING NEOFINANCE v2.0
        </span>
        
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 800, 
          color: '#0f172a', 
          letterSpacing: '-0.05em', 
          margin: '24px 0 16px 0',
          lineHeight: '1.1'
        }}>
          Clean analytics for your <br />
          <span style={{ color: '#64748b' }}>personal economy.</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#64748b', 
          maxWidth: '540px', 
          margin: '0 auto 32px auto',
          lineHeight: '1.6'
        }}>
          A minimalist dashboard engineered to track expenses, manage custom dynamic budgets, and monitor your multi-currency assets with zero friction.
        </p>

        <button 
          onClick={() => navigate('/dashboard')} 
          className="neo-btn"
          style={{ 
            width: 'auto', 
            padding: '14px 32px', 
            fontSize: '1rem', 
            fontWeight: 600,
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.15)'
          }}
        >
          Open App Dashboard ⚡
        </button>
      </div>

      {/* 2. LIVE SIMULATION STATISTICS (HIASAN DATA) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '60px' 
      }}>
        <div className="neo-box" style={{ margin: 0, padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>💻</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Avg Income</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>$150.00</div>
        </div>
        <div className="neo-box" style={{ margin: 0, padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>☕</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Daily Comfort</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>$5.00</div>
        </div>
        <div className="neo-box" style={{ margin: 0, padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🎮</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>Entertainment</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>$29.99</div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '0 0 50px 0' }} />

      {/* 3. GRID FEATURE CARDS */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        <div className="neo-box" style={{ margin: 0, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ backgroundColor: '#f1f5f9', padding: '10px', borderRadius: '8px', fontSize: '1.2rem' }}>🎯</div>
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Smart Budget Limiter</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' }}>Set constraints and monitor real-time limits to maintain total control over monthly expenditures.</p>
          </div>
        </div>

        <div className="neo-box" style={{ margin: 0, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ backgroundColor: '#f1f5f9', padding: '10px', borderRadius: '8px', fontSize: '1.2rem' }}>📊</div>
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Visual Metrics</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' }}>Analyze spending behaviors through fluid, dynamic financial charts structured for clarity.</p>
          </div>
        </div>
      </div>

      {/* 4. FOOTER */}
      <div style={{ textAlign: 'center', marginTop: '80px', fontSize: '0.8rem', color: '#94a3b8', fontWeight: 500 }}>
        NeoFinance Engineering © 2026. Built with React & Inter Typeface.
      </div>

    </div>
  )
}

export default Home