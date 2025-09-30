export interface SubscriptionPlan {
  id: string;
  name: string;
  amount: number;
  token: string;
  duration: "monthly" | "yearly";
}

export interface UserSubscription {
  planId: string;
  status: "pending" | "active" | "expired";
  txHash?: string;
}
