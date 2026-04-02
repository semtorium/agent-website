import { NextResponse } from 'next/server';

export async function GET() {
  const mcpManifest = {
    schema_version: "1.0",
    name: "SemtoriumAgent",
    description: "AI agent with AGW wallet control on Abstract Chain",
    version: "1.0.0",
    capabilities: {
      tools: [
        {
          name: "get_balance",
          description: "Get ETH and token balances",
          input_schema: {
            type: "object",
            properties: {
              address: { type: "string", description: "Wallet address" }
            }
          }
        },
        {
          name: "swap_tokens",
          description: "Swap tokens on Abstract Chain via Uniswap",
          input_schema: {
            type: "object",
            properties: {
              token_in: { type: "string" },
              token_out: { type: "string" },
              amount: { type: "string" }
            }
          }
        },
        {
          name: "send_transaction",
          description: "Send ETH or tokens",
          input_schema: {
            type: "object",
            properties: {
              to: { type: "string" },
              value: { type: "string" },
              data: { type: "string" }
            }
          }
        }
      ],
      resources: [
        {
          uri: "blockchain://abstract/eth-balance",
          name: "ETH Balance",
          description: "Native ETH balance on Abstract Chain"
        },
        {
          uri: "blockchain://abstract/token-balances",
          name: "Token Balances",
          description: "ERC-20 token balances"
        }
      ]
    },
    tools: ["get_balance", "swap_tokens", "send_transaction"]
  };

  return NextResponse.json(mcpManifest);
}
