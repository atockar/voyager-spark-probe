// Proration for mid-cycle plan changes. Charges the difference for the unused
// remainder of the current period.
export function prorate(oldPlanCents, newPlanCents, daysRemaining, daysInPeriod) {
  const unusedCredit = (oldPlanCents * daysRemaining) / daysInPeriod;
  const newCharge = (newPlanCents * daysRemaining) / daysInPeriod;
  return Math.round(newCharge - unusedCredit);
}
