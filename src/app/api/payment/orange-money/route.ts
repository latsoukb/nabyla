import { NextRequest, NextResponse } from "next/server";
import { createOrangeMoneyPayment } from "@/lib/payment/orange-money";

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

    const payment = await createOrangeMoneyPayment({
      amount,
      orderId,
      returnUrl: `${baseUrl}/commande/succes?orderId=${orderId}`,
      cancelUrl: `${baseUrl}/commande/echec?orderId=${orderId}`,
    });

    return NextResponse.json({
      paymentUrl: payment.payment_url,
      paymentToken: payment.payment_token,
    });
  } catch (error) {
    console.error("Orange Money payment error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'initialisation du paiement Orange Money" },
      { status: 500 }
    );
  }
}
