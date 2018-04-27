newid
=====
Generates a unique id value.

```js
function newid(prefix:string = 'id'): string
```

### Args

**prefix:string**  
Prefix the return value with this string

### Returns
A new unique id

### Examples

```js
import newid from '@deskpro/js-utils/dist/newid';

console.log(newid());          // Outputs: 'id1'
console.log(newid());          // Outputs: 'id2'
console.log(newid('prefix-')); // Outputs: 'prefix-3'
```