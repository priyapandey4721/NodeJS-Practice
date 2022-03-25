const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);
// shows the system in running from when in seconds
console.log(`The System in Running from ${os.uptime()} seconds`);
//shows the details of system
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOs);
