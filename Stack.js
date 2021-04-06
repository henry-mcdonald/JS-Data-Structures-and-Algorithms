// Your stack class goes here

class Stack{
    constructor(){
        this.data = []
    }
    size(){
        return(this.data.length)

    }
    isEmpty(){
        return this.size() === 0 
    }

    push(el){
        return this.data.push(el)
    }
    pop(){
        this.data.pop()
        return this.data.length

    }
    peek(){
        return this.data[this.data.length - 1]
    }
    print(){
        console.log(this.data)
    }
}


const newStack = new Stack()
newStack.push(0)
newStack.push(1)
newStack.push(7)
newStack.push(2)
newStack.pop()
console.log(newStack.peek())
newStack.print()