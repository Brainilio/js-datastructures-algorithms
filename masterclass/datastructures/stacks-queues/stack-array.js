let stack = []

//pushing onto the stack
stack.push("Page one")
stack.push("Page two")
stack.push("Page three")

//removing from top of the stack;
stack.pop()

//Using any other method would be an anti-pattern...

// BAD! Time complexity of unshift/shift...

// add to beginning
stack.unshift("create new file")
stack.unshift("resized file")

//remove from the beginning
stack.shift()
