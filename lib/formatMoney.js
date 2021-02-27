export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    minimumFractionDigits: 2,
    currency: 'GBP',
  };

  // check if it's a clean amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-UK', options);

  return formatter.format(amount / 100);
}
