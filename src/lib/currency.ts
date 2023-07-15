export const formatPrice = (number: number, locale: string, currency: string): string => {
    return new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(number / 100);
}