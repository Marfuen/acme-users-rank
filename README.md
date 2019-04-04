Heroku Link: https://marianofu-acme-users-rank.herokuapp.com/

Didn't have time for Top Ranked :/

Getting this error when deploying to heroku:


 { SequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:5432
2019-04-04T21:35:40.638005+00:00 app[web.1]:     at connection.connect.err (/app/node_modules/sequelize/lib/dialects/postgres/connection-manager.js:142:24)
2019-04-04T21:35:40.638007+00:00 app[web.1]:     at Connection.connectingErrorHandler (/app/node_modules/pg/lib/client.js:163:14)
2019-04-04T21:35:40.638009+00:00 app[web.1]:     at Connection.emit (events.js:189:13)
2019-04-04T21:35:40.638011+00:00 app[web.1]:     at Socket.reportStreamError (/app/node_modules/pg/lib/connection.js:71:10)
2019-04-04T21:35:40.638013+00:00 app[web.1]:     at Socket.emit (events.js:189:13)
2019-04-04T21:35:40.638015+00:00 app[web.1]:     at emitErrorNT (internal/streams/destroy.js:82:8)
2019-04-04T21:35:40.638016+00:00 app[web.1]:     at emitErrorAndCloseNT (internal/streams/destroy.js:50:3)
2019-04-04T21:35:40.638018+00:00 app[web.1]:     at process._tickCallback (internal/process/next_tick.js:63:19)
2019-04-04T21:35:40.638020+00:00 app[web.1]:   name: 'SequelizeConnectionRefusedError',
2019-04-04T21:35:40.638022+00:00 app[web.1]:   parent:
2019-04-04T21:35:40.638024+00:00 app[web.1]:    { Error: connect ECONNREFUSED 127.0.0.1:5432
2019-04-04T21:35:40.638025+00:00 app[web.1]:        at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1097:14)
2019-04-04T21:35:40.638027+00:00 app[web.1]:      errno: 'ECONNREFUSED',
2019-04-04T21:35:40.638028+00:00 app[web.1]:      code: 'ECONNREFUSED',
2019-04-04T21:35:40.638030+00:00 app[web.1]:      syscall: 'connect',
2019-04-04T21:35:40.638032+00:00 app[web.1]:      address: '127.0.0.1',
2019-04-04T21:35:40.638034+00:00 app[web.1]:      port: 5432 },
2019-04-04T21:35:40.638035+00:00 app[web.1]:   original:
2019-04-04T21:35:40.638037+00:00 app[web.1]:    { Error: connect ECONNREFUSED 127.0.0.1:5432
2019-04-04T21:35:40.638038+00:00 app[web.1]:        at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1097:14)
2019-04-04T21:35:40.638040+00:00 app[web.1]:      errno: 'ECONNREFUSED',
2019-04-04T21:35:40.638041+00:00 app[web.1]:      code: 'ECONNREFUSED',
2019-04-04T21:35:40.638043+00:00 app[web.1]:      syscall: 'connect',
2019-04-04T21:35:40.638045+00:00 app[web.1]:      address: '127.0.0.1',
2019-04-04T21:35:40.638046+00:00 app[web.1]:      port: 5432 } }
