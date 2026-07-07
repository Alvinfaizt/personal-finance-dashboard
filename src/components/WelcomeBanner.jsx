function WelcomeBanner() {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="neo-box" style={{ padding: '24px', background: 'var(--text-main)', color: 'var(--bg-primary)', marginBottom: '24px' }}>
      <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{greeting}, Developer!</h2>
      <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', opacity: 0.7 }}>Ready to inspect today's financial system metrics?</p>
    </div>
  )
}
export default WelcomeBanner;