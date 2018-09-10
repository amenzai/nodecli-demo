#!/usr/bin/env node

// var name = process.argv[2];
// var shell = require("shelljs");

// 本地shell模式
// shell.exec("echo hello " + name);





// 全局shell模式
// require('shelljs/global');

// mkdir('-p', 'out/Release');
// cp('-R', 'stuff/*', 'out/Release');

// cd('lib');
// ls('*.js').forEach(function(file) {
//   sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
//   sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
//   sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
// });
// cd('..');

// if (exec('git commit -am "Auto-commit"').code !== 0) {
//   echo('Error: Git commit failed');
//   exit(1);
// }





// var argv = require('yargs').argv;
// console.log('hello ', argv.name);

// var argv = require('yargs')
//   .alias('n', 'name')
//   .argv;
// console.log('hello ', argv.n);
// console.log(argv._);
// use: gjccli--name tom or gjccli -n tom





// var argv = require('yargs')
//   .demand(['n'])
//   .default({n: 'tom'})
//   .describe({n: 'your name'})
//   .argv;

// console.log('hello ', argv.n);

// or

// var argv = require('yargs')
//   .option('n', {
//     alias : 'name',
//     demand: true,
//     default: 'tom',
//     describe: 'your name',
//     type: 'string'
//   })
//   .argv;

// console.log('hello ', argv.n);





// var argv = require('yargs')
//   .boolean(['n'])
//   .argv;

// console.log('hello ', argv.n);

// var argv = require('yargs')
//   .option('n', {
//     boolean: true
//   })
//   .argv;

// console.log('hello ', argv.n);





// var argv = require('yargs')
//   .option('f', {
//     alias : 'name',
//     demand: true,
//     default: 'tom',
//     describe: 'your name',
//     type: 'string'
//   })
//   .usage('Usage: hello [options]')
//   .example('hello -n tom', 'say hello to Tom')
//   .help('h')
//   .alias('h', 'help')
//   .epilog('copyright 2015')
//   .argv;

// console.log('hello ', argv.n);




// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {
//     console.log("Good Morning");
//   })
//   .command("evening", "good evening", function (yargs) {
//     console.log("Good Evening");
//   })
//   .argv;

// console.log('hello ', argv.n);





// require('shelljs/global');
// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {
//     echo("Good Morning");
//   })
//   .command("evening", "good evening", function (yargs) {
//     echo("Good Evening");
//   })
//   .argv;

// console.log('hello ', argv.n);




// require('shelljs/global');
// var argv = require('yargs')
//   .command("morning", "good morning", function (yargs) {  
//     echo("Good Morning");
//     var argv = yargs.reset()
//       .option("m", {
//         alias: "message",
//         description: "provide any sentence"
//       })
//       .help("h")
//       .alias("h", "help")
//       .argv;

//     echo(argv.m);
//   })
//   .argv;



// if (err) {
//   process.exit(1);
// } else {
//   process.exit(0);
// }