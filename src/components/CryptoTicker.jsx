function CryptoTicker() {
  return (
    <div className="neo-box" style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1.1rem' }}>₿</span>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>BTC/USD</span>
      </div>
      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#16a34a' }}>$94,250.00</span>
    </div>
  )
}
export default CryptoTicker;