// Your Queue Class goes here
class Queue {
  constructor() {
    this.data = []
  }

  // returns the size of the queue
  size() {
    return this.data.length
  }

  // returns bool if queue is empty
  isEmpty() {
    return this.size() === 0
  }

  // adds item to queue -- returns new size
  enqueue(item) {
    this.data.push(item)
    return this.size()
  }

  // removes item from queue -- returns new size
  dequeue(item) {
    this.data.shift()
    return this.size()
  }

  // returns the first item in the queue 
  peek() {
    return this.data[0]
  }


  // logs all items in the queue
  print() {
    this.data.forEach(element => {
      console.log(element)
    })
  }
}

/**
 * testing area
 */

 console.clear()

 const queuetiePie = new Queue
 
 console.log('.isEmpty() should return true:', queuetiePie.isEmpty()) 
 console.log('.peek() should return "undefined":', queuetiePie.peek())
 
 console.log('.enqueue() should return 1:', queuetiePie.enqueue('sweetpotato pie'))
 console.log('.enqueue() should return 2:', queuetiePie.enqueue('banana fudge pie'))
 console.log('.enqueue() should return 4:', queuetiePie.enqueue('key lime pie'))
 console.log('.enqueue() should return 3:', queuetiePie.enqueue('sweetpotato pie'))
 
 console.log('.peek() should return "sweetpotato pie":', queuetiePie.peek())
 console.log('.dequeue() should return 3:', queuetiePie.dequeue())
 console.log('.peek() should return "banana fudge pie":', queuetiePie.peek())
 console.log('.print() should log all items in the stack and return undefined:', queuetiePie.print())