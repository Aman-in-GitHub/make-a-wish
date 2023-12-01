const holidays = [
  { month: 1, day: 1, greeting: 'Happy New Year' },
  { month: 2, day: 14, greeting: "Happy Valentine's Day" },
  { month: 3, day: 8, greeting: "Happy International Women's Day" },
  { month: 4, day: 22, greeting: 'Happy Earth Day' },
  { month: 5, day: 1, greeting: 'Happy Labor Day' },
  { month: 6, day: 21, greeting: 'Happy World Music Day' },
  { month: 8, day: 19, greeting: 'Happy World Photography Day' },
  { month: 9, day: 21, greeting: 'Happy International Day of Peace' },
  { month: 10, day: 31, greeting: 'Happy Halloween' },
  { month: 11, day: 11, greeting: 'Happy Veterans Day' },
  { month: 11, day: 22, greeting: 'Happy Thanksgiving' },
  { month: 12, day: 1, greeting: 'Happy Make A Wish Day' },
  { month: 12, day: 25, greeting: 'Merry Christmas' },
  { month: 12, day: 31, greeting: "Happy New Year's Eve" }
];

let morningMessage = 'Good Morning';
let afternoonMessage = 'Good Afternoon';
let eveningMessage = 'Good Evening';

export function setMorningMessage(morning) {
  morningMessage = morning;
}

export function setAfternoonMessage(afternoon) {
  afternoonMessage = afternoon;
}

export function setEveningMessage(evening) {
  eveningMessage = evening;
}

export function wishTime(name = 'User') {
  const hour = new Date().getHours();

  if (hour < 12) {
    return morningMessage + ' ' + name;
  } else if (hour < 18) {
    return afternoonMessage + ' ' + name;
  } else {
    return eveningMessage + ' ' + name;
  }
}

export function wishHoliday(name = 'User') {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const todayHoliday = holidays.find(
    (holiday) => holiday.month === month && holiday.day === day
  );

  if (todayHoliday) {
    return todayHoliday.greeting + ' ' + name;
  } else {
    return 'Have A Great Day' + ' ' + name;
  }
}
