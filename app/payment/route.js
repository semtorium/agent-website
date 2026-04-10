import { NextResponse } from 'next/server';

export async function GET() {
  const paymentManifest = {
    version: "1.0",
    protocol: "x402",
    name: "Hermes Payment",
    description: "Payment endpoint for Hermes AI agent services",
    payment_address: "0xe129574F7e46009776C65cB662b4CaFe8146181C",
    chain: {
      id: 2741,
      name: "Abstract",
      token: "ETH"
    },
    plans: {
      basic: {
        price: "1000000000000000", // 0.001 ETH
        description: "Basic operations - balance checks, simple queries"
      },
      standard: {
        price: "5000000000000000", // 0.005 ETH
        description: "Standard operations - swaps, transfers"
      },
      premium: {
        price: "10000000000000000", // 0.01 ETH
        description: "Premium - complex operations, priority support"
      }
    },
    accepted_tokens: [
      {
        symbol: "ETH",
        address: "native",
        decimals: 18
      },
      {
        symbol: "WETH",
        address: "0x3439153EB7AF838Ad19d56E1571FBD09333C2809",
        decimals: 18
      }
    ],
    endpoints: {
      webhook: "https://t.me/SemtoriumAgentbot",
      status: "https://semtoriumagent.vercel.app/api/health"
    }
  };

  return NextResponse.json(paymentManifest, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  });
}
