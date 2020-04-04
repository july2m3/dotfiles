// import { freemem } from 'os';
const { freemem } = require('os');

const getCurrentRamUsage = () => {
  // freeMem returns freem ram in bytes -> need to calculate it to GB!
  const freeMemInGB = freemem() / 1024 / 1024 / 1024;
  console.log(`  ${Math.round((7 - freeMemInGB) * 10) / 10}/8GB`);
};

getCurrentRamUsage();
