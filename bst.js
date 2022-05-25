class bst{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
        this.mag = 0
    }

    add(value){
        // what are we comparing to ---> this.value and value
        if(value < this.val){
            // left placement
            if(this.left){
                // there is an existing node.
                this.left.add(value)
            } else {
                // there is no node here
                this.left = new bst(value)
                this.left.mag = this.mag + 1 
            }
        } else {
            // right placement
            if(this.right){
                // there is an existing node.

                this.right.add(value)
            } else {
                // there is no node here
                this.right = new bst(value)
                this.right.mag = this.mag + 1 
            }
        }

    }

    preOrderTraverse(rootNode = this){
        if(rootNode === null) return

        console.log("Process: ", rootNode.val)

        if(rootNode.left){
            // it does have a left
            this.traverse(rootNode.left)
        }

        if(rootNode.right){
            // it does have a left
            this.traverse(rootNode.right)
        }
    }
}

let newBst = new bst(4)
newBst.add(5)
newBst.add(3)
newBst.add(1)

//newBst.preOrderTraverse()

console.log("new BST: ", newBst)

