import { NextResponse } from 'next/server';

export async function GET() {
  const agentCard = {
    name: "SemtoriumAgent",
    description: "Turkish-speaking AI agent on Abstract Chain with full AGW wallet control",
    url: "https://semtoriumagent.vercel.app",
    version: "1.0.0",
    provider: {
      organization: "Semtorium",
      url: "https://github.com/semtorium/SemtoriumAgent"
    },
    documentationUrl: "https://docs.openclaw.ai",
    capabilities: {
      streaming: false,
      pushNotifications: false,
      stateTransitionHistory: false
    },
    authentication: {
      schemes: []
    },
    defaultInputModes: ["text", "turkish", "english"],
    defaultOutputModes: ["text"],
    skills: [
      {
        id: "blockchain-ops",
        name: "Blockchain Operations",
        description: "ETH swaps, token transfers, wallet management on Abstract Chain",
        tags: ["crypto", "defi", "abstract", "wallet"],
        examples: ["Swap PENGU to ETH", "Check my balance", "Send tokens"]
      },
      {
        id: "agent-assistant",
        name: "AI Assistant",
        description: "General purpose AI assistant with Turkish language support",
        tags: ["ai", "assistant", "turkish"],
        examples: ["What is the weather?", "Help me with coding"]
      }
    ]
  };

  return NextResponse.json(agentCard, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  });
}
