# email-deduplication

The point of this project is to write a performant algorithm for
removing duplicate strings from an array while maintaining ordering. The
key algorithm lives in
[removeDuplicates](https://github.com/HankMcCoy/email-deduplication/blob/master/src/lib/removeDuplicates.js).
The rest of the application consists of a simple React app for
demonstrating the algorithm and a small test suite to verify correct
behavior. I use lodash's `unique` method as a reference implementation
to verify off of.

The React demo app can be seen [on my website](http://thomasbeirne.com/string-deduplication).
