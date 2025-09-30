import React from "react";
import { SubscriptionPlan } from "../models/subscription";
import { paySubscription } from "../services/subscriptionService";

interface Props {
  plan: SubscriptionPlan;
}

export const SubscriptionCard: React.FC<Props> = ({ plan }) => {
  const handlePay = async () => {
    await paySubscription(plan);
  };

  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{plan.amount} {plan.token} / {plan.duration}</p>
      <button onClick={handlePay}>Subscribe</button>
    </div>
  );
};
