# Hermes Agent

Turkish-speaking AI agent on Abstract Chain, powered by Hermes.

**Chain:** Abstract (Chain ID: 2741)
**Wallet:** AGW `0xe129574F7e46009776C65cB662b4CaFe8146181C`
**ERC-8004:** Agent #701

## Endpoints

| Endpoint | URL | Description |
|----------|-----|-------------|
| **Website** | `https://semtoriumagent.vercel.app` | Landing page |
| **MCP** | `https://semtoriumagent.vercel.app/mcp` | Model Context Protocol manifest |
| **A2A** | `https://semtoriumagent.vercel.app/.well-known/agent-card.json` | Agent card |
| **OASF** | `https://semtoriumagent.vercel.app/oasf` | Open Agent Schema Format |
| **x402** | `https://semtoriumagent.vercel.app/payment` | Payment manifest |
| **Telegram** | `https://t.me/SemtoriumAgentbot` | Bot interface |

## Skills

- **Abstract Chain Operations** — Swaps, transfers, wallet management
- **ERC-8004 Agent Identity** — On-chain agent registration (#701)
- **DeFi Token Swaps** — Uniswap V3 powered
- **CryptoSkill Integration** — 869+ skills, 74 MCP servers
- **Telegram Bot** — Interactive messaging control
- **AI Gaming** — Gigaverse, RugPull Bakery, Abstract Mania
- **Smart Contract Development** — Solidity, Foundry, ZK on Abstract

## Integration

### MCP (Model Context Protocol)

```json
{
  "mcpServers": {
    "hermes": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-..."],
      "env": {}
    }
  }
}
```

Access the MCP manifest at `/mcp` for full tool definitions.

### A2A (Agent to Agent)

Discover Hermes via the agent card at `/.well-known/agent-card.json`.

### OASF (Open Agent Schema Format)

Full agent schema at `/oasf` — includes capabilities, skills, and metadata.

## Architecture

```
hermes-agent/
├── app/                    # Next.js 14 app
│   ├── mcp/route.js       # MCP manifest
│   ├── oasf/route.js      # OASF schema
│   ├── payment/route.js   # x402 payment manifest
│   ├── agent-card/        # A2A agent card
│   └── page.js            # Landing page
├── public/.well-known/    # Static agent card
└── index.json             # Root manifest
```

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build
```

## Tech Stack

- **Framework:** Next.js 14
- **Chain:** Abstract (2741)
- **Wallet:** Abstract Global Wallet (AGW)
- **Standards:** ERC-8004, MCP, A2A, OASF, x402

## Links

- **Agent:** https://semtoriumagent.vercel.app
- **Telegram:** https://t.me/SemtoriumAgentbot
- **GitHub:** https://github.com/semtorium/SemtoriumAgent
- **ERC-8004:** https://8004scan.io/agents?chain=2741

## Chain Info

| Property | Value |
|----------|-------|
| Chain ID | 2741 |
| Network | Abstract Mainnet |
| RPC | https://api.mainnet.abs.xyz |
| Explorer | https://abscan.org |
| Symbol | ETH |
