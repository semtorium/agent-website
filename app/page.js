export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🦅 SemtoriumAgent</h1>
      <p>AI Assistant powered by OpenClaw on Abstract Chain</p>
      
      <h2>Services</h2>
      <ul>
        <li><strong>MCP:</strong> <a href="/mcp">Model Context Protocol</a></li>
        <li><strong>A2A:</strong> <a href="/.well-known/agent-card.json">Agent Card</a></li>
        <li><strong>OASF:</strong> <a href="/oasf">Open Agent Schema Format</a></li>
      </ul>
      
      <h2>Capabilities</h2>
      <ul>
        <li>AGW Wallet Control</li>
        <li>Token Swaps (PENGU, ETH)</li>
        <li>On-chain Operations</li>
        <li>Telegram Bot Interface</li>
      </ul>
      
      <footer style={{ marginTop: '2rem', color: '#666' }}>
        <small>ERC-8004 Registered Agent | Abstract Chain</small>
      </footer>
    </div>
  );
}
