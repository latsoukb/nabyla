import { Order } from "@/lib/types";

const orders = new Map<string, Order>();

export function saveOrder(order: Order): void {
  orders.set(order.id, order);
}

export function getOrder(orderId: string): Order | undefined {
  return orders.get(orderId);
}

export function updateOrderStatus(
  orderId: string,
  status: Order["status"]
): Order | undefined {
  const order = orders.get(orderId);
  if (!order) return undefined;
  order.status = status;
  orders.set(orderId, order);
  return order;
}
