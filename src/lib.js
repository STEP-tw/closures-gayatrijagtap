const makeConstant = function( input ) {
  const constant = input;
  return function() {
    return constant;
  }
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

const makeCounterFromZero = function() {
  let initialCount = 0;
  const count = function() {
    let finalCount = initialCount;
    initialCount++;
    return finalCount;
  }
  let reference = count;
  return reference;
};

const makeDeltaTracker = function( oldDelta ) {
  const trackDelta = function( inputDelta ) {
    let deltaInfo = {};
    if(inputDelta == undefined ) {
      inputDelta = 0;
    }
    deltaInfo.old = oldDelta;
    deltaInfo.delta = inputDelta;
    let newDelta = oldDelta+inputDelta;
    deltaInfo.new = newDelta;
    oldDelta = newDelta;
    return deltaInfo;
  }
  let reference = trackDelta;
  return reference;
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

const makeCycler = function(inputCycle) {
  let cycleElements = [];
  inputCycle.map(function(element) { cycleElements.push(element); return; });
  let cycle = cycleElements.length;
  let count = 0;
  const cycler = function() {
    if(count == cycle) {
      count = 0;
    }
    let result = cycleElements[count];
    count++;
    return result;
  }
  let reference = cycler;
  return reference;
};

const curry = function(inputFunction,firstArg) {
  const functionCaller = function(secondArg,thirdArg) {
    return inputFunction(firstArg,secondArg,thirdArg);
  }
  let reference = functionCaller;
  return functionCaller;
}


const compose = function( firstFunction,secondFunction ) {
  const functionCaller = function(firstArg,secondArg) {
    let result = secondFunction(firstArg,secondArg);
    let finalResult = firstFunction(result);
    return finalResult;
  }
  let reference = functionCaller;
  return functionCaller;
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
