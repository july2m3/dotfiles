const { drive } = require('node-os-utils');

drive.info().then((info) => {
  console.log(`  ${info.usedGb}/${info.totalGb}GB`);
});
