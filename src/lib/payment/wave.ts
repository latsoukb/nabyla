import crypto from "crypto";

export interface WaveCheckoutSession {
  id: string;
  wave_launch_url: string;
  amount: string;
  currency: string;
  client_reference: string;
  checkout_status: string;
}

export interface WaveCheckoutRequest {
  amount: number;
  orderId: string;
  successUrl: string;
  errorUrl: string;
}

export async function createWaveCheckoutSession(
  request: WaveCheckoutRequest
): Promise<WaveCheckoutSession> {
  const apiKey = process.env.WAVE_API_KEY;
  const isDemo = !apiKey || process.env.PAYMENT_DEMO_MODE === "true";

  if (isDemo) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return {
      id: `demo_wave_${Date.now()}`,
      wave_launch_url: `${baseUrl}/api/payment/wave/demo?orderId=${request.orderId}&amount=${request.amount}`,
      amount: String(request.amount),
      currency: "XOF",
      client_reference: request.orderId,
      checkout_status: "open",
    };
  }

  const response = await fetch("https://api.wave.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: String(request.amount),
      currency: "XOF",
      client_reference: request.orderId,
      success_url: request.successUrl,
      error_url: request.errorUrl,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Wave API error: ${error}`);
  }

  return response.json();
}

export function verifyWaveWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const secret = process.env.WAVE_WEBHOOK_SECRET;
  if (!secret) return false;

  const expected = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
