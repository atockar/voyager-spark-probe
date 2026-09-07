// Payment provider webhook intake. Providers redeliver on timeout, so every
// handler must be idempotent on the event id.
const seen = new Set();

export function handleInvoicePaid(event, ledger) {
  if (seen.has(event.id)) return { duplicate: true };
  seen.add(event.id);
  ledger.settle(event.data.invoiceId, event.data.amountCents);
  return { duplicate: false };
}
