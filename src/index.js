const chalk = require('chalk');

console.log(chalk.green('Hello from baseline-test!'));
console.log(chalk.yellow('This repo intentionally has no security controls.'));
console.log('');
console.log('Run an OpenSSF Baseline audit to see what is missing:');
console.log(chalk.cyan('  audit_openssf_baseline(local_path=".")'));
console.log('');
console.log('Then implement fixes one by one to reach 100% compliance!');
