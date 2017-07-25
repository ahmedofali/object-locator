# dot-prop 
 > For Educational purposes to learn how to create a node module from start to finish I have  Decided to follow Sindre in his commits to know how to create a node module .
 
 > Get a property from a nested object using a dot path
 
 
 ## Install
 
 ```
 $ npm install --save dot-prop
 ```
 
 
 ## Usage
 
 ```js
 var dotProp = require('dot-prop');
 
 dotProp({foo: {bar: 'unicorn'}}, 'foo.bar');
 //=> 'unicorn'
 ```
 
 
 ## License
 
 MIT © [Sindre Sorhus](http://sindresorhus.com)