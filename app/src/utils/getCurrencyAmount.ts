/**
 * Форматирует число в валютный формат с разделителями тысяч пробелами
 * @param amount - Число для форматирования
 * @param currency - Символ валюты (по умолчанию '$')
 * @returns Отформатированная строка (например: "$ 8 382")
 */
export const getCurrencyAmount = (
  amount: number | string,
  currency: string = "$",
): string => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(numericAmount)) {
    return `${currency} 0`;
  }

  const formattedNumber = numericAmount
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `${currency} ${formattedNumber}`;
};
