## Test framework with mocha steps and builder class pattern

Scripts
* "test": "./node_modules/mocha/bin/mocha --timeout=30000 --require mocha-steps ./build/tests/**.js",
* "clean": "rm -rf build",
* "build": "babel --preset es2015 -d build/ src/"