## Test framework with mocha steps and builder class pattern

Scripts - execute the scripts in the following order:
1. "clean": "rm -rf build"
2. "build": "babel --preset es2015 -d build/ src/"
3. "test": "./node_modules/mocha/bin/mocha --timeout=30000 --require mocha-steps ./build/tests/**.js"