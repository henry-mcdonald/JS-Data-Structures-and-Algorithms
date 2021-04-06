// Your Queue Class goes here
class Queue{
    constructor(){
        this.data = []
    }
    isEmpty(){
        return this.data.length === 0
    }
    enqueue(el){
        return this.data.push(el)
    }
    dequeue(){
        this.data.shift()
        return this.data.length
    }
    peek(){
        return this.data[0]
    }
    print(){
        console.log(this.data)
    }
}