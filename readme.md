# Task-Notify

Task-Notify is a simple command-line tool that executes a specified command and sends a notification when the command completes successfully. It uses the [node-notifier](https://github.com/mikaelbr/node-notifier) package to send desktop notifications.

## Installation

To use Task-Notify, you'll need to have [Node.js](https://nodejs.org/) installed on your system. You can install Task-Notify globally using `npm`:

```sh
npm install -g task-notify
```

## Usage

```sh
task-notify -c <command> [-m <message>]
```


The `-c` option specifies the command to execute, and the `-m` option specifies the notification message to display (optional). For example:


```sh
task-notify -c "echo 'Hello, world!'" -m "Test notification"
```

This command will execute the `echo 'Hello, world!'` command and display a notification with the message "Test notification" when it completes successfully.

## License

Task-Notify is released under the [MIT License](LICENSE).

## Demo

![demo png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lfvhjj2564d0ck9kr78v.png)