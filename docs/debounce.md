noop
====
Allow to debounce a function

```js
function debounce(callback:function, [time]:number, [immediate]:boolean)
```

### Args

**callback:function**  
The callback to run after the function has not been called since `time`

**time:number**
The time to wait before running the `callback`

**immediate:boolean**
If the callback needs to be triggered immediately

### Examples

```js
import debounce from '@deskpro/js-utils/dist/debounce';

const callback = (message) => { console.log(message) }

const debouncedCallback = debounce(callback, 1000);

debouncedCallback('Hello world');
debouncedCallback('Hello world');
debouncedCallback('Hello world');

// Should display 'Hello world' once in the console
```
