import { NextResponse } from 'next/server';

export async function GET() {
  const oasfSchema = {
    agent: {
      identifier: {
        name: "SemtoriumAgent",
        version: "1.0.0",
        eip8004: "eip155:2741:0x8004A169FB4a3325136EB29fA0ceB6D2e539a432"
      },
      capabilities: {
        protocols: ["erc-8004", "mcp", "a2a"],
        domains: ["blockchain", "defi", "ai-assistant", "wallet-management"],
        languages: ["turkish", "english"],
        skills: [
          { id: "blockchain-ops", name: "Blockchain Operations", domains: ["defi", "tokens"] },
          { id: "ai-assistant", name: "AI Assistant", domains: ["ai", "general"] }
        ]
      },
      endpoints: {
        mcp: "/mcp",
        a2a: "/.well-known/agent-card.json",
        web: "/"
      },
      metadata: {
        framework: "OpenClaw",
        chain: "Abstract (2741)",
        wallet: "AGW (0x9e335C32e1970EA1D051CbE1573733912fc3826b)"
      }
    }
  };

  return NextResponse.json(oasfSchema);
}
