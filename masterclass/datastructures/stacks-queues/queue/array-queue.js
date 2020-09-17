var queue = []

/// first approach

// add to end
queue.push("first")
queue.push("sec")
queue.push("third")

//remove from beginnig; bad part === re-indexing everything from the end
queue.shift()

// second approach

// add to beginning; bad part === re-indexing everything from the beginngintg as well
queue.unshift("first")
queue.unshift("second")

//remove from end
queue.pop()
