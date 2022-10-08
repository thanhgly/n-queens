var Benchmark = require('/lib/benchmark');


const suite = new Benchmark.Suite('My performance test');


suite.add('test', function () {

  console.log('test successfully ran');
  //call function w parameters
  findNRooksSolution(3);
});

suite.run();