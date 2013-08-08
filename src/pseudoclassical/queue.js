var Queue = function(){

  this.storage = {};

  this.sizeOf = 0;

  this.position = 0;

};

Queue.prototype.enqueue = function(value){
  this.sizeOf++;
  this.storage[this.position++] = value;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.sizeOf;
};