function ActivityLog({ transactions }) {
  return (
    <div className="neo-box" style={{ padding: '20px', marginBottom: '24px' }}>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '0.9rem', fontWeight: 700 }}>System Integrity Log</h4>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
        ● Last action: {transactions.length > 0 ? 'Sync transaction successful' : 'Waiting for incoming node data...'}
      </div>
    </div>
  )
}
export default ActivityLog;