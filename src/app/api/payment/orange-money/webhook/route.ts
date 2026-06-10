import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus } from "@/lib/store/orders";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const orderId = body.order_id || body.reference;
    const status = body.status;

    if (orderId && (status === "SUCCESS" || status === "SUCCESSFUL")) {
      updateOrderStatus(orderId, "paid");
    } else if (orderId && status === "FAILED") {
      updateOrderStatus(orderId, "failed");
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
