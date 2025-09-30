import React from "react";
import { WalletConnectButton } from "../components/WalletConnectButton";
import { SubscriptionCard } from "../components/SubscriptionCard";
import { SubscriptionPlan } from "../models/subscription";

const plans: SubscriptionPlan[] = [
  { id: "plan1", name: "Basic", amount: 0.01, token: "ETH", duration: "monthly" },
  { id: "plan2", name: "Pro", amount: 0.05, token: "ETH", duration: "monthly" },
];

export const HomePage = () => {
  return (
    <div>
      <h1>CryptoSubs</h1>
      <WalletConnectButton />
      {plans.map((plan) => (
        <SubscriptionCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};
