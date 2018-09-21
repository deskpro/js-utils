strings/trimString
====
Trim a string to a certain length with an ellipsis

```js
function trimString(str: string, maxLength: number)
```

### Args

**str:string**  
The string to trim.

**maxLength:number**  
The maximum number of characters.


### Returns
The trimmed string.

### Examples

```js
import { trimString } from '@deskpro/js-utils/dist/strings';

console.log(trimString('abcdefg', 6)); // Outputs abc...
console.log(trimString('abcde', 6)); // Outputs abcde
```
