var makeStack = function(){
  var newStack = {};

  newStack.storage = {};

  newStack.sizeOf = 0;

  newStack.stack = {};

  _.extend(newStack, makeStack.stackMethods);

  return newStack;
};

makeStack.stackMethods = {};

// define makeStack methods
makeStack.stackMethods.push = function(value){
  this.storage[this.sizeOf++] = value;
};

makeStack.stackMethods.pop = function(){
  this.sizeOf && this.sizeOf--;
  var candidate = this.storage[this.sizeOf];
  delete this.storage[this.sizeOf];
  return candidate;
};

makeStack.stackMethods.size = function(){
  return this.sizeOf;
};