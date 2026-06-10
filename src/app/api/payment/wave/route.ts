import { NextRequest, NextResponse } from "next/server";
import { createWaveCheckoutSession } from "@/lib/payment/wave";

export async function POST(request: NextRequest) {
  try {
    const { orderId, amount } = await request.json();

    if (!orderId || !amount) {
      return NextResponse.json(
        { error: "orderId et amount requis" },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await createWaveCheckoutSession({
      amount,
      orderId,
      successUrl: `${baseUrl}/commande/succes?orderId=${orderId}`,
      errorUrl: `${baseUrl}/commande/echec?orderId=${orderId}`,
    });

    return NextResponse.json({
      paymentUrl: session.wave_launch_url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Wave payment error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'initialisation du paiement Wave" },
      { status: 500 }
    );
  }
}
