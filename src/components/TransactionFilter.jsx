function TransactionFilter({ activeFilter, setActiveFilter }) {
  const filters = ['all', 'income', 'expense'];
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActiveFilter(f)}
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid var(--border-color)',
            background: activeFilter === f ? 'var(--text-main)' : 'var(--input-bg)',
            color: activeFilter === f ? 'var(--bg-primary)' : 'var(--text-main)',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'all 0.2s ease'
          }}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
export default TransactionFilter