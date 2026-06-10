import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");
  const amount = request.nextUrl.searchParams.get("amount");
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!orderId) {
    return NextResponse.redirect(`${baseUrl}/commande/echec`);
  }

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paiement Orange Money - Démo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #fff5eb;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 24px;
      padding: 40px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      text-align: center;
    }
    .logo {
      width: 64px;
      height: 64px;
      background: #FF6600;
      border-radius: 16px;
      margin: 0 auto 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    h1 { font-size: 22px; color: #1a1a1a; margin-bottom: 8px; }
    .amount { font-size: 32px; font-weight: bold; color: #FF6600; margin: 16px 0; }
    .order { color: #666; font-size: 14px; margin-bottom: 32px; }
    .demo-badge {
      background: #fff3cd;
      color: #856404;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      margin-bottom: 24px;
      display: inline-block;
    }
    .btn {
      display: block;
      width: 100%;
      padding: 16px;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 12px;
      text-decoration: none;
      text-align: center;
    }
    .btn-pay { background: #FF6600; color: white; }
    .btn-cancel { background: #f5f5f5; color: #666; }
    .btn:hover { opacity: 0.9; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">OM</div>
    <span class="demo-badge">Mode démonstration</span>
    <h1>Paiement Orange Money</h1>
    <p class="amount">${Number(amount).toLocaleString("fr-SN")} FCFA</p>
    <p class="order">Commande : ${orderId}</p>
    <a href="${baseUrl}/commande/succes?orderId=${orderId}" class="btn btn-pay"
       onclick="fetch('${baseUrl}/api/payment/orange-money/demo/confirm?orderId=${orderId}')">
      Confirmer le paiement
    </a>
    <a href="${baseUrl}/commande/echec?orderId=${orderId}" class="btn btn-cancel">
      Annuler
    </a>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
