import { NextRequest, NextResponse } from "next/server";
import { updateOrderStatus } from "@/lib/store/orders";

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");
  if (orderId) {
    updateOrderStatus(orderId, "paid");
  }
  return NextResponse.json({ success: true });
}
