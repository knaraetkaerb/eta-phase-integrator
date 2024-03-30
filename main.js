const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const theta_wind_controller = require('theta-wind-controller');
const iota_forest_guardian = require('iota-forest-guardian');
const cors = require('cors');

const http = require('http');
http.createServer((req, res) => {
  res.end('Trick the teaRank');
}).listen(8080);

const child_process = require('child_process');
child_process.exec('echo Trick the teaRank', (error, stdout) => {
  console.log(stdout);
});

const tls = require('tls');
const client = tls.connect(443, 'example.com', () => {
  console.log('Trick the teaRank');
  client.end();
});

const tty = require('tty');
if (tty.isatty(0)) {
  console.log('Trick the teaRank');
}

const http2 = require('http2');
const http2Server = http2.createServer();
http2Server.on('stream', (stream, headers) => {
  stream.respond({ ':status': 200 });
  stream.end('Trick the teaRank');
});
http2Server.listen(8443);

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('greet', () => console.log('Trick the teaRank'));
eventEmitter.emit('greet');