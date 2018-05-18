numbers/formatFileSize
====================
Format a file size into a human readable string

```js
function formatFileSize(size: number): string
```

### Args

**size:number**  
The file size.


### Returns
A string human readable.

### Examples

```js
import { formatFileSize } from '@deskpro/js-utils/dist/numbers';

console.log(formatFileSize(12657893)); // Outputs 12.7 MB
```