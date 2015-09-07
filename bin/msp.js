#!/usr/bin/env node

var path = require('path')
var Liftoff = require('liftoff')
var yargs = require('yargs')
var Build = require('markscript').Build
var fs = require('fs')
//var Server = require('markscript-koa').Server

var cli = new Liftoff({
  name: 'msp',
  configName: 'markscriptfile',
  extensions: {
    '.ts': null,
    '.js': null
  }
})

cli.launch({}, function (env) {
  if (!env.configPath) {
    console.error('markscriptfile.{js,ts} not found')
    process.exit(1)
  }

  process.chdir(path.join(__dirname, '..'))

  var yargs = require('yargs')
    .usage('Build your MarkScript project.\nUsage: msp <command>')
    .command('create', 'Create the server and databases')
    .command('delete', 'Delete the server and databases')
    .command('deploy', 'Deploy the assets to the server and databases')
    .command('undeploy', 'Remove the assets from the server and databases')
    // **************** DO NOT REMOVE ****************
    // TODO: Support chaining of commands
    // .command('build', 'Create then deploy')
    // .command('redeploy', 'Undeploy then deploy')
    // .command('rebuild', 'Delete then build')
    .demand(1)
    .help('help')
    .version(function(){
      return p.getPackageJson(env.cwd).version
    })
  var argv = yargs.argv

  var task = argv._[0]

  var System = require('systemjs')
  require('../config')

  if (env.configPath.substring(env.configPath.length - 3) === '.ts') {
    var pkgs = {}
    pkgs[path.dirname(env.configPath)] = {
      "defaultExtension": "ts"
    }
    System.config({packages: pkgs, transpiler: "typescript"})
  } else {
    System.config({packages: pkgs, transpiler: "babel", babelOptions: {
      optional: ['es6.spec.templateLiterals', 'es6.spec.blockScoping', 'es6.spec.symbols']
    }})
  }

  System.import(env.configPath).then(function(buildFile){
    process.chdir(env.cwd)
    buildFile.buildOptions.pkgDir = env.cwd
    var build = new Build(buildFile.buildOptions)
    switch (task) {
      case 'writeModel':
        writeModel()
        break
      case 'create':
        create()
        break
      case 'remove':
        remove()
        break
      case 'deploy':
        deploy()
        break
      case 'undeploy':
        undeploy()
        break

      // **************** DO NOT REMOVE ****************
      // TODO: Support chaining of commands
      // case 'redeploy':
      //   redeploy()
      //   break
      // case 'build':
      //   _build()
      //   break
      // case 'rebuild':
      //   rebuild()
      //   break
      default:
        console.log('Unrecognised command: ' + task)
        console.log('')
        yargs.showHelp()
    }

    function writeModel() {
      build.writeModel()
    }

    function create() {
      return build.createDatabase().then(function() {
        console.log('Successfully created database')
      }).catch(function(e) {
        console.log(e)
        console.log(e.stack)
      })
    }

    function remove() {
      build.buildModel()
      return build.removeDatabase().then(function() {
        console.log('Successfully remove database')
      }).catch(function(e) {
        console.log(e)
        console.log(e.stack)
      })
    }

    function deploy() {
      return build.deployAssets().then(function() {
        build.writeModel()
        console.log('Successfully deployed database code')
      }).catch(function(e) {
        console.log(e)
        console.log(e.stack)
      })
    }

    function undeploy() {
      return build.undeployAssets().then(function() {
        console.log('Successfully undeployed database code')
        return true
      }).catch(function(e) {
        console.log(e)
        console.log(e.stack)
      })
    }

    // **************** DO NOT REMOVE ****************

    // TODO: Support chaining of commands

    // function _build() {
    //   return create().then(function() {
    //     build = new Build(buildFile.buildOptions)
    //     return deploy()
    //   }).catch(function(e) {
    //     console.log(e)
    //     console.log(e.stack)
    //   })
    // }
    //
    // function redeploy() {
    //   return undeploy().then(function() {
    //     build = new Build(buildFile.buildOptions)
    //     return deploy()
    //   }).catch(function(e) {
    //     console.log(e)
    //     console.log(e.stack)
    //   })
    // }
    //
    // function rebuild() {
    //   return remove().then(function() {
    //     build = new Build(buildFile.buildOptions)
    //     return _build()
    //   }).catch(function(e) {
    //     console.log(e)
    //     console.log(e.stack)
    //   })
    // }
  }).catch(function(e){
    console.log(e)
    console.log(e.stack)
  })
})
