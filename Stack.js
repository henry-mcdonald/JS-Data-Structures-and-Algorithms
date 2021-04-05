// Your stack class goes here
class Stack {
  constructor() {
    this.data = []
  }

  // return the size of the stack
  size() {
    return this.data.length
  }

  // returns bool if stack is empty
  isEmpty() {
    return this.size() == 0
  }

  // add an item to the stack
  push(item) {
    this.data.push(item)
    return this.size()
  }

  // remove an item from the stack
  pop() {
    this.data.pop()
    return this.size()
  }

  // return the first item in the stack
  peek() {
    return this.data[this.data.length - 1]
  }

  // prints all items in the stack
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

const shortStack = new Stack

console.log('.isEmpty() should return true:', shortStack.isEmpty()) 

console.log('.push() should return 1:', shortStack.push('maple syrup'))
console.log('.push() should return 2:', shortStack.push('butter'))
console.log('.push() should return 4:', shortStack.push('fresh berries'))
console.log('.push() should return 3:', shortStack.push('whipped cream'))

console.log('.peek() should return "whipped cream":', shortStack.peek())
console.log('.pop() should return 3:', shortStack.pop())
console.log('.peek() should return "fresh berries":', shortStack.peek())
console.log('.print() should log all items in the stack and return undefined:', shortStack.print())






// console.log('size() should return 0:', shortStack.size()) 
