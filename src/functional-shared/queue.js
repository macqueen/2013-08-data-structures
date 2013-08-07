var makeQueue = function(){
  var newQueue = {};

  newQueue.storage = {};

  newQueue.sizeOf = 0;

  newQueue.position = 0;

  _.extend(newQueue, makeQueue.queueMethods);

  return newQueue;
};

makeQueue.queueMethods = {};

makeQueue.queueMethods.enqueue = function(value){
  this.sizeOf++;
  this.storage[this.position++] = value;
};

makeQueue.queueMethods.dequeue = function(){
  this.sizeOf && this.sizeOf--;
  var minKey/* = Number.POSITIVE_INFINITY*/;
  for (var key in this.storage) {
    if (typeof minKey === 'undefined') {
      minKey = key;
    }
    else if (key < minKey){
      minKey = key;
    }
  }
  var result = this.storage[minKey];
  delete this.storage[minKey];
  return result;
};

makeQueue.queueMethods.size = function(){
  return this.sizeOf;
};