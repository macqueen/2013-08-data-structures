var Stack = function(){

  var newStack = Object.create(Stack.stackMethods);

  newStack.storage = {};

  newStack.sizeOf = 0;

  newStack.stack = {};

  return newStack;
};

Stack.stackMethods = {};

// define makeStack methods
Stack.stackMethods.push = function(value){
  this.storage[this.sizeOf++] = value;
};

Stack.stackMethods.pop = function(){
  this.sizeOf && this.sizeOf--;
  var candidate = this.storage[this.sizeOf];
  delete this.storage[this.sizeOf];
  return candidate;
};

Stack.stackMethods.size = function(){
  return this.sizeOf;
};