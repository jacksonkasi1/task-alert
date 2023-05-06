const { spawn } = require('child_process');
const notifier = require('node-notifier');

module.exports = function executeCommand(command, message = 'Command completed successfully') {
  const [cmd, ...args] = command.split(' ');
  const process = spawn(cmd, args);

  process.on('close', (code) => {
    if (code === 0) {
        notifier.notify({
        title: 'Command completed',
        message,
      });
    }
  });
};
