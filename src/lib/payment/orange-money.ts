export interface OrangeMoneyPaymentRequest {
  amount: number;
  orderId: string;
  returnUrl: string;
  cancelUrl: string;
}

export interface OrangeMoneyPaymentResponse {
  payment_token: string;
  payment_url: string;
  notif_token: string;
}

async function getOrangeAccessToken(): Promise<string> {
  const clientId = process.env.ORANGE_CLIENT_ID;
  const clientSecret = process.env.ORANGE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Orange Money credentials not configured");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch(
    "https://api.orange.com/oauth/v3/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to obtain Orange Money access token");
  }

  const data = await response.json();
  return data.access_token;
}

export async function createOrangeMoneyPayment(
  request: OrangeMoneyPaymentRequest
): Promise<OrangeMoneyPaymentResponse> {
  const merchantKey = process.env.ORANGE_MERCHANT_KEY;
  const isDemo =
    !merchantKey || process.env.PAYMENT_DEMO_MODE === "true";

  if (isDemo) {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return {
      payment_token: `demo_om_${Date.now()}`,
      payment_url: `${baseUrl}/api/payment/orange-money/demo?orderId=${request.orderId}&amount=${request.amount}`,
      notif_token: `notif_${request.orderId}`,
    };
  }

  const accessToken = await getOrangeAccessToken();

  const response = await fetch(
    "https://api.orange.com/orange-money-webpay/dev/v1/webpayment",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchant_key: merchantKey,
        currency: "OUV",
        order_id: request.orderId,
        amount: request.amount,
        return_url: request.returnUrl,
        cancel_url: request.cancelUrl,
        notif_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/orange-money/webhook`,
        lang: "fr",
        reference: `Nabylaa - ${request.orderId}`,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Orange Money API error: ${error}`);
  }

  const data = await response.json();
  return {
    payment_token: data.pay_token,
    payment_url: data.payment_url,
    notif_token: data.notif_token,
  };
}
