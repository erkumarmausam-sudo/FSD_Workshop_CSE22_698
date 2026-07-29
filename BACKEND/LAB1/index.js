const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (teacher) => {
  console.log(`Class Started by ${teacher}`);
});

myEmitter.on('exit', () => {
  console.log('Class Finished');
});

myEmitter.emit('greet', 'Mr. Sharma');
myEmitter.emit('exit');