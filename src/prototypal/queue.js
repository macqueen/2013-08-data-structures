var Queue = function(){
  var newQueue = Object.create(Queue.queueMethods);

  newQueue.storage = {};

  newQueue.sizeOf = 0;

  newQueue.position = 0;

  return newQueue;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value){
  this.sizeOf++;
  this.storage[this.position++] = value;
};

Queue.queueMethods.dequeue = function(){
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

Queue.queueMethods.size = function(){
  return this.sizeOf;
};