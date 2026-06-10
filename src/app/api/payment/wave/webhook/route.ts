import { NextRequest, NextResponse } from "next/server";
import { verifyWaveWebhookSignature } from "@/lib/payment/wave";
import { updateOrderStatus } from "@/lib/store/orders";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("X-Wave-Signature") ?? "";

    if (
      process.env.WAVE_WEBHOOK_SECRET &&
      !verifyWaveWebhookSignature(payload, signature)
    ) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);

    if (event.type === "checkout.session.completed") {
      const orderId = event.data?.client_reference;
      if (orderId) {
        updateOrderStatus(orderId, "paid");
      }
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
