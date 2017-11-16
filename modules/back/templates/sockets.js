const chalk = require('chalk');
const Io = require('socket.io');

module.exports = listener => {
  const io = new Io(listener);

  io.on('connection', socket => {
    console.log(chalk.green.bgWhite(`Socket ${ socket.id } connected!`));
    socket.on('isAlive', () => socket.emit('alive'));
  });
};
