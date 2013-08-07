var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var queue = {};

  var position = 0;

  queue.enqueue = function(value){
    size++;
    storage[position++] = value;
  };

  queue.dequeue = function(){
    size && size--;
    var minKey;
    for (var key in storage) {
      if (typeof minKey === 'undefined') {
        minKey = key;
      }
      else if (key < minKey){
        minKey = key;
      }
    }
    var result = storage[minKey];
    delete storage[minKey];
    return result;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
