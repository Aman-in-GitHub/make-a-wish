# make-a-wish

A fully customizable npm package for wishing users based on the time of day and holidays

## Installation

Install the package using npm:

```bash
npm install make-a-wish
```

## Usage

Import the package

```js
import {
  setMorningMessage,
  setAfternoonMessage,
  setEveningMessage,
  wishTime,
  wishHoliday
} from 'make-a-wish';
```

## Set Custom Messages

Set custom messages for different times of the day:

```js
setMorningMessage('Good Morning');
setAfternoonMessage('Good Afternoon');
setEveningMessage('Good Evening');
```

## Wish Users Based on Time

```js
const morningWish = wishTime('Raksha');
console.log(morningWish); // Output: Good Morning Raksha
```

## Wish Users on Holidays

```js
const holidayWish = wishHoliday('Raksha');
console.log(holidayWish); // Output: Merry Christmas Raksha
```

## List of Holidays

The package includes wishes for the following holidays:

New Year's Day: January 1

Valentine's Day: February 14

International Women's Day: March 8

Earth Day: April 22

Labor Day: May 1

World Music Day: June 21

World Photography Day: August 19

International Day of Peace: September 21

Halloween: October 31

Veterans Day: November 11

Thanksgiving: November 22

Christmas: December 25

New Year's Eve: December 31

## Customization

Feel free to customize messages and greetings using the provided functions:

```js
setMorningMessage(morning: string): void
setAfternoonMessage(afternoon: string): void
setEveningMessage(evening: string): void
```

## Contributions

Contributions are welcome! If you find any issues or want to enhance the functionality, please open an issue or submit a pull request.

## License

This package is licensed under the [MIT License](LICENSE).
