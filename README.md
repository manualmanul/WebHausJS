# WebHausJS

WebHausJS is a Socket.io client for [HausJS](https://github.com/manualmanul/HausJS)

This is a solution for an interview test task by Ubiquiti Latvia.

Server part of this project can be found here: [manualmanul/HausJS](https://github.com/manualmanul/HausJS)

## General information

### Features

* Landing page and chat page
* Feedback messages (server unavailable, nickname taken etc.)
* Built with Bootstrap CSS and pure JavaScript to reduce complexity

### Demonstration

You can find a demonstration server here: [hausjs.catto.io](https://hausjs.catto.io)

Please note that this server is unmoderated and accessible to everyone. I've added bot users Ian and Karen that send messages between each other for demonstration purposes.

## Getting started

To set up this project on your machine, follow these instructions:

### Prerequisites

* web server that can host the `public/` directory

OR

* Node.js 10.x or newer
* npm

### Installing

Using a conventional web server like Nginx:

* serve the `/public` to your clients

Using a Node.JS web server:

```shell
git clone https://github.com/manualmanul/WebHausJS.git
cd WebHausJS
npm
node server.js
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
