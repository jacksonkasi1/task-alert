#!/usr/bin/env node

const minimist = require('minimist');
const executeCommand = require('../index');

const args = minimist(process.argv.slice(2), {
  alias: {
    c: 'command',
    m: 'message'
  },
});

const { command, message } = args;

if (command) {
  executeCommand(command, message);
} else {
  console.log('Usage: task-notify -c <command> [-m <message>]');
}
