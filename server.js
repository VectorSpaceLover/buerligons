const path = require('path')
const Server = require('@buerli.io/node/server').default
const Logger = require('@buerli.io/node/extras/logger').default

const server = new Server(
  {
    instances: 1,
    // The following are all defaults ...
    // executable: 'ClassCADInstance.exe',
    configurationData: 'CADApplication.ini',
    output: path.resolve('./node_modules/@awv/classcad_cadapplication'),
    protocol: 'http',
    serverOptions: {},
    ip: 'localhost',
    privatePort: 0,
    publicPort: 8181,
    binary: true,
    multipart: true,
    compression: true,
    sendTreePatches: true,
    stdout: false,
    secureApi: false,
    debug: true,
    showConsole: false,
    stateDebounce: 500,
    workerTimeout: 1000 * 15,
    restTimeout: 1000 * 60 * 2,
    collectResultsOnly: true,
    logExpirationDays: 5,
  },
  Logger({ spinOnFirstUser: true }),
).start()