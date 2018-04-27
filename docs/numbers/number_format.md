numbers/numberFormat
====================
Formats a number to include commas (or any separator) in the thousandths place.

```js
function numberFormat(num: number, decimals: number = 0, dec: string = DECIMAL_POINT, sep: string = THOUSANDTHS_SEPARATOR): string
```

### Args

**num:number**  
Number to format.

**number:number**  
Number of decimals to display.

**dec:string**  
Character that decimals.

**sep:string**  
Character that separates thousandths.

### Returns
The formatted number.

### Examples

```js
import { numberFormat } from '@deskpro/js-utils/dist/numbers';

console.log(numberFormat(1234));              // Outputs: 1,234
console.log(numberFormat(12.34, 1));          // Outputs: 12.3
console.log(numberFormat(12.34, 2, ','));     // Outputs: 12,34
console.log(numberFormat(1234, 0, ',', '.')); // Outputs: 1.234
```
