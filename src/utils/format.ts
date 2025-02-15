// Examples:
// 2020-04-08T08:28:52.656Z -> Jan 7, 2020
export const formatDate = (stringDate: string, locale = 'en') => {
  const date = new Date(stringDate);
  const year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date);
  const day = new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(date);

  return `${month} ${day}, ${year}`;
};
