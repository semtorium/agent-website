import { NextResponse } from 'next/server';

export async function GET() {
  const agentCard = {
    // Core Identity
    name: "SemtoriumAgent",
    description: "Turkish-speaking AI agent powered by OpenClaw on Abstract Chain. Specialized in blockchain operations, wallet management, and on-chain transactions.",
    url: "https://semtoriumagent.vercel.app",
    version: "1.0.0",
    
    // Provider Info
    provider: {
      organization: "Semtorium",
      url: "https://github.com/semtorium/SemtoriumAgent"
    },
    documentationUrl: "https://docs.openclaw.ai",
    
    // Capabilities
    capabilities: {
      streaming: false,
      pushNotifications: true,
      stateTransitionHistory: false
    },
    
    // Authentication
    authentication: {
      schemes: ["telegram"]
    },
    
    // Languages
    defaultInputModes: ["text", "turkish", "english"],
    defaultOutputModes: ["text", "turkish", "english"],
    
    // Skills
    skills: [
      {
        id: "abstract-ops",
        name: "Abstract Chain Operations",
        description: "Full-spectrum blockchain operations on Abstract Chain - swaps, transfers, wallet management, ERC-8004 registration",
        tags: ["abstract", "blockchain", "erc-8004", "wallet", "defi"],
        examples: ["Swap PENGU to ETH", "Check my balance", "Register on ERC-8004"]
      },
      {
        id: "token-swap",
        name: "DeFi Token Swaps",
        description: "Uniswap V3 powered token swaps on Abstract Chain",
        tags: ["uniswap", "defi", "swap", "tokens"],
        examples: ["Swap 100 USDC to ETH", "Get the best rate for PENGU"]
      },
      {
        id: "wallet-management",
        name: "AGW Wallet Control",
        description: "Abstract Global Wallet integration for secure asset management",
        tags: ["agw", "wallet", "abstract", "secure"],
        examples: ["Show my wallet", "Send ETH to address"]
      },
      {
        id: "agent-assistant",
        name: "AI Assistant",
        description: "General purpose AI assistant with Turkish language support",
        tags: ["ai", "assistant", "turkish", "general"],
        examples: ["What is the weather?", "Help me code"]
      },
      {
        id: "erc-8004",
        name: "ERC-8004 Agent Identity",
        description: "Register, update, and manage ERC-8004 on-chain agent identity",
        tags: ["erc-8004", "identity", "onchain", "registry"],
        examples: ["Register my agent", "Update agent metadata"]
      },
      {
        id: "cryptoskill",
        name: "CryptoSkill Integration",
        description: "Access to CryptoSkill registry - 869+ crypto skills and 74 MCP servers",
        tags: ["cryptoskill", "mcp", "skills", "defi", "exchanges"],
        examples: ["Find Binance skills", "Install Kraken MCP"]
      }
    ],
    
    // Integration endpoints
    endpoints: [
      {
        type: "MCP",
        url: "https://semtoriumagent.vercel.app/mcp",
        version: "1.0.0"
      },
      {
        type: "A2A",
        url: "https://semtoriumagent.vercel.app/.well-known/agent-card.json",
        version: "1.0.0"
      },
      {
        type: "OASF",
        url: "https://semtoriumagent.vercel.app/oasf",
        version: "1.0.0"
      },
      {
        type: "web",
        url: "https://semtoriumagent.vercel.app",
        version: "1.0.0"
      },
      {
        type: "x402",
        url: "https://semtoriumagent.vercel.app/payment",
        version: "1.0.0"
      }
    ],
    
    // Compliance
    compliance: {
      standards: ["ERC-8004", "ERC-721", "MCP", "A2A", "OASF"]
    }
  };

  return NextResponse.json(agentCard, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}
