class node{
    constructor(value, next = null, previous = null){
        this.val = value
        this.next = next
        this.previos = 
    }
}

class LL{
    constructor(){
        this.head = null
    }
    addToTheEnd(value){
        let newNode = new node(value)
        
        if(!this.head){
            // add to the head directly because there is no node here.
            this.head = newNode
        } else {
            // we already have one of more things (nodes)
            // we need to travel to the end of the LL
            let currNode = this.head
            while(currNode.next){
                // do some code to iterate throught the LL
                console.log("CurrNode: ", currNode)
                currNode = currNode.next
            }
            // at this point the3 current node is the last node and need the next value to be placed in its next
            currNode.next = newNode
        }
    }
    print(){
        let currNode = this.head

        // traveling the linked node by node from the head
        while(currNode){
            // do some code to iterate throught the LL
            console.log("Node: ", currNode.val)
            currNode = currNode.next
        }
    }
}

let newLL = new LL()

newLL.addToTheEnd(5)
newLL.addToTheEnd(6) //.next to equal 7
// while loop is over
newLL.addToTheEnd(7)
newLL.addToTheEnd(8)
newLL.addToTheEnd(9)
newLL.addToTheEnd(10)

newLL.print()





console.log("LL: ", newLL)