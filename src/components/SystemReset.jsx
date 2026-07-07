function SystemReset({ setTransactions }) {
  const clearData = () => {
    if (window.confirm("Purge all data from storage?")) {
      setTransactions([]);
      localStorage.removeItem('transactions');
    }
  };

  return (
    <div className="neo-box" style={{ borderColor: 'rgba(239, 68, 68, 0.2)', padding: '20px', marginBottom: '24px' }}>
      <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#dc2626' }}>Danger Zone</h4>
      <button onClick={clearData} style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
        Wipe All Storage Data
      </button>
    </div>
  )
}
export default SystemReset;