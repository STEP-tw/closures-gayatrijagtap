const makeConstant = function( input ) {
  const constant = input;
  return function() {
    return constant;
  }
};

const makeCounterFromN = function( initialCount ) {
  return function() {
    finalCount = initialCount;
    initialCount++;
    return finalCount;
  }
};

const makeCounterFromZero = function() {
  let initialCount = 0;
  return function() {
    let finalCount = initialCount;
    initialCount++;
    return finalCount;
  }
};

const makeDeltaTracker = function( oldDelta ) {
  return function( inputDelta = 0 ) {
    let deltaInfo = {old:oldDelta, delta:inputDelta, new:oldDelta+inputDelta};
    oldDelta = deltaInfo.new;
    return deltaInfo;
  }
};

const makeFiboGenerator = function(firstTerm,secondTerm) {
  let count = 0;
  if(firstTerm == undefined) {
    firstTerm = 0;
    secondTerm = 1;
  }
  if(firstTerm != undefined && secondTerm == undefined) {
    secondTerm = firstTerm;
    firstTerm = 0;
  }
  const getNextFiboNum = function() {
    if(count == 0){
      count++;
      return firstTerm;
    }
    if(count == 1) {
      count++;
      return secondTerm;
    }
    let nextTerm = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    return nextTerm;
  }
  let reference = getNextFiboNum;
  return reference;
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
