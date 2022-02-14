import Holidays from 'date-holidays';

const holidays = new Holidays();
holidays.init('US');
const holidaysForYear = holidays.getHolidays(new Date().getFullYear()).map(obj => {
  return {
    date: new Date(obj.date).toISOString(),
    type: 'Holiday',
    name: obj.name,
    image: 'https://picsum.photos/100/100',
  };
});

export default holidaysForYear;