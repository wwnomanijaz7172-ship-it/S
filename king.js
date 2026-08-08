// indes.js

// Named imports (curly braces {} ke andar wahi naam likhein jo export kiye thay)
import { add, multiply } from './math.js';

// Default import (isay curly braces ke baghair koi bhi naam de sakte hain)
import sayHello from './math.js';

// Functions ko run karna
console.log(add(5, 3));       // Output: 8
console.log(multiply(4, 2));    // Output: 8

sayHello();                     // Output: Hello from Math module!