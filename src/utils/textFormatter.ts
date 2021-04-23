import numbro from 'numbro';

export function _currency(c) {
  return numbro(+c).formatCurrency({
    currencySymbol: '₦',
    thousandSeparated: true,
  });
}

export const _creditCardMask = (number: string | number, character = '*') => {
  number = String(number).replace(/[^0-9]+/g, ''); /*ensureOnlyNumbers*/
  var l = number.length;
  return (
    number.substring(0, 4) +
    character.repeat(l - 8) +
    number.substring(l - 4, l)
  );
};
