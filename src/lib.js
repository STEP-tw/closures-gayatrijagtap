const makeConstant = function( input ) {
  let value = input;
  const createConstant = function() {
    const constant = value;
    return constant;
  }
  let reference = createConstant;
  return reference;
};

const makeCounterFromN = function( initialCount ) {
  let initCount = initialCount;
  const count = function() {
    let finalCount = initCount;
    initCount++;
    return finalCount;
  }
  let reference = count;
  return reference;
};
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
