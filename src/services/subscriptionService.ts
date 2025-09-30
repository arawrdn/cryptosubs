import { appkit } from "./appkit";
import { SubscriptionPlan, UserSubscription } from "../models/subscription";

export async function paySubscription(plan: SubscriptionPlan): Promise<UserSubscription> {
  try {
    const tx = await appkit.sendTransaction({
      to: "0xReceiverAddressHere",
      value: plan.amount,
      token: plan.token,
    });

    return {
      planId: plan.id,
      status: "pending",
      txHash: tx.hash,
    };
  } catch {
    return {
      planId: plan.id,
      status: "pending",
    };
  }
}
