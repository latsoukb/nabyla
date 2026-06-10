import { NextRequest, NextResponse } from "next/server";
import { generateOrderId } from "@/lib/utils";
import { saveOrder } from "@/lib/store/orders";
import { Order } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, shipping, paymentMethod, subtotal, shippingCost, total } =
      body;

    if (!items?.length || !shipping || !paymentMethod) {
      return NextResponse.json(
        { error: "Données de commande incomplètes" },
        { status: 400 }
      );
    }

    const order: Order = {
      id: generateOrderId(),
      items,
      shipping,
      paymentMethod,
      subtotal,
      shippingCost,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    saveOrder(order);

    return NextResponse.json({ orderId: order.id, order });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
