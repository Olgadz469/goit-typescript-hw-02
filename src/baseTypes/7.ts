/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Dayweek {
  Monday = "Mon",
  Tuesday = "Tue",
  Wensday = "Wed",
  Thusday = "Thu",
  Friday = "Fri",
  Saturday = "Sat",
  Sunday = "Sun",
}
function isWeekend(Day: Dayweek): boolean {
  return Day === Dayweek.Saturday || Day === Dayweek.Sunday;
}
