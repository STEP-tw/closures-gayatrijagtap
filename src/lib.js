const makeConstant = function( input ) {
  const constant = input;
  return function() {
    return constant;
  }
};

const makeCounterFromN = function( initialCount ) {
  return function() {
    return initialCount++;
  }
};

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
};

const makeDeltaTracker = function( oldDelta ) {
  return function( inputDelta = 0 ) {
    let deltaInfo = {old:oldDelta, delta:inputDelta, new:oldDelta+inputDelta};
    oldDelta = deltaInfo.new;
    return deltaInfo;
  }
};

const makeFiboGenerator = function(secondTerm = 1,firstTerm = 0) {
  let previous = Math.min(firstTerm,secondTerm);
  let current = Math.max(firstTerm,secondTerm)
  return function() {
    let result = previous;
    let nextTerm = previous+current;
    previous = current;
    current = nextTerm;
    return result;
  }
}

const makeCycler = function( elements ) {
  let cycleElements = [];
  elements.map(function(element) { cycleElements.push(element); return; } );
  return function() {
    let result = cycleElements.shift();
    cycleElements.push(result);
    return result;
  }
};

const curry = function(inputFunction,firstArg) {
  return function(secondArg,thirdArg) {
    return inputFunction(firstArg,secondArg,thirdArg);
  }
}


const compose = function( firstFunction,secondFunction ) {
  return function(firstArg,secondArg) {
    let result = secondFunction(firstArg,secondArg);
    let finalResult = firstFunction(result);
    return finalResult;
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
