import { TriggerClient } from "@trigger.dev/sdk";
import { NextResponse } from "next/server";

const client = new TriggerClient({
  id: "xlerion-ultimate",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});

export async function POST(request: Request) {
  try {
    const response = await client.handleRequest(request);
    return new NextResponse(response.body, { status: response.status });
  } catch (error) {
    console.error("Error handling Trigger.dev request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}