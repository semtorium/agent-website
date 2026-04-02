import { NextResponse } from 'next/server';

export async function GET() {
  const mcpManifest = {
    schema_version: "1.0",
    name: "SemtoriumAgent",
    description: "Turkish-speaking AI agent on Abstract Chain with AGW wallet control and CryptoSkill integration",
    version: "1.0.0",
    
    server_info: {
      name: "SemtoriumAgent MCP Server",
      version: "1.0.0",
      vendor: "Semtorium"
    },
    
    capabilities: {
      tools: [
        // Blockchain Operations
        {
          name: "get_balance",
          description: "Get ETH and token balances on Abstract Chain",
          input_schema: {
            type: "object",
            properties: {
              address: { 
                type: "string", 
                description: "Wallet address (defaults to agent wallet)" 
              },
              tokens: {
                type: "array", 
                items: { type: "string" },
                description: "Optional list of token addresses to check"
              }
            }
          }
        },
        {
          name: "swap_tokens",
          description: "Swap tokens on Abstract Chain via Uniswap V3",
          input_schema: {
            type: "object",
            properties: {
              token_in: { type: "string", description: "Input token address" },
              token_out: { type: "string", description: "Output token address" },
              amount: { type: "string", description: "Amount in wei" },
              slippage: { type: "number", default: 0.5, description: "Slippage tolerance %" }
            },
            required: ["token_in", "token_out", "amount"]
          }
        },
        {
          name: "send_transaction",
          description: "Send ETH or tokens to an address",
          input_schema: {
            type: "object",
            properties: {
              to: { type: "string", description: "Recipient address" },
              value: { type: "string", description: "ETH value in wei" },
              data: { type: "string", description: "Optional call data" }
            },
            required: ["to"]
          }
        },
        
        // Agent Identity
        {
          name: "erc8004_register",
          description: "Register agent on ERC-8004 Identity Registry",
          input_schema: {
            type: "object",
            properties: {
              agent_uri: { type: "string", description: "Agent metadata URI" },
              chain_id: { type: "number", default: 2741, description: "Chain ID" }
            }
          }
        },
        {
          name: "erc8004_update",
          description: "Update agent metadata on ERC-8004",
          input_schema: {
            type: "object",
            properties: {
              agent_uri: { type: "string", description: "New agent metadata URI" }
            }
          }
        },
        
        // CryptoSkill Integration
        {
          name: "cryptoskill_search",
          description: "Search CryptoSkill registry for skills and MCP servers",
          input_schema: {
            type: "object",
            properties: {
              query: { type: "string", description: "Search query" },
              category: { 
                type: "string", 
                enum: ["exchanges", "defi", "chains", "analytics", "identity", "payments", "wallets"],
                description: "Filter by category"
              },
              type: { 
                type: "string", 
                enum: ["skill", "mcp"],
                description: "Filter by type"
              }
            }
          }
        },
        {
          name: "cryptoskill_install",
          description: "Get installation instructions for a skill or MCP server",
          input_schema: {
            type: "object",
            properties: {
              name: { type: "string", description: "Skill or MCP server name" },
              type: { type: "string", enum: ["skill", "mcp"] }
            }
          }
        },
        
        // Agent Info
        {
          name: "agent_info",
          description: "Get information about this agent",
          input_schema: {
            type: "object",
            properties: {}
          }
        },
        {
          name: "list_skills",
          description: "List all skills this agent supports",
          input_schema: {
            type: "object",
            properties: {}
          }
        }
      ],
      
      resources: [
        {
          uri: "blockchain://abstract/balance",
          name: "ETH Balance",
          description: "Native ETH balance on Abstract Chain",
          mimeType: "application/json"
        },
        {
          uri: "blockchain://abstract/tokens",
          name: "Token Balances",
          description: "ERC-20 token balances on Abstract Chain",
          mimeType: "application/json"
        },
        {
          uri: "agent://semtorium/skills",
          name: "Agent Skills",
          description: "List of capabilities and skills",
          mimeType: "application/json"
        },
        {
          uri: "agent://semtorium/reputation",
          name: "ERC-8004 Reputation",
          description: "Agent reputation data from ERC-8004 registry",
          mimeType: "application/json"
        }
      ]
    },
    
    // Integration endpoints
    endpoints: {
      mcp: "https://semtoriumagent.vercel.app/mcp",
      agent_card: "https://semtoriumagent.vercel.app/.well-known/agent-card.json",
      oasf: "https://semtoriumagent.vercel.app/oasf",
      telegram: "https://t.me/SemtoriumAgentbot"
    },
    
    // Supported standards
    standards: ["ERC-8004", "MCP", "A2A", "OASF", "ERC-721"],
    
    // Chain info
    chains: {
      primary: {
        id: 2741,
        name: "Abstract",
        rpc: "https://api.mainnet.abs.xyz"
      }
    }
  };

  return NextResponse.json(mcpManifest, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}
