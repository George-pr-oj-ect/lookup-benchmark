// HASH MAP (also called a dictionary, or just "object" in JS)
// Stores key-value pairs
// Looking up a value by its key is instant, O(1)
// NOT like arrays, where finding something might mean checking
// every single item one by one
// Hash maps (objects) = instant lookup by EXACT key
// Great for: "give me user with id 'abc123'" instantly
// NOT great for: "find all products containing 'phone'"
// (that still needs looping/filtering through everything)
// HASH MAP (what we just learned) = a data structure
// Organizes data by key for instant lookup
// Nothing to do with security, just speed

// CRYPTOGRAPHIC HASHING (security context) = a one-way scrambling function
// Takes a password like "mypassword123" and turns it into
// something like "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
// You CANNOT reverse it back to the original password
// When you log in, the site hashes what you TYPED and compares
// the scrambled versions, it never stores or sees your real password

// shift() = remove from the beginning - O(n), slower than pop because
// every remaining item has to move down one index
// BIG O = a way to describe how an operation's SPEED changes
// as the amount of data grows
//
// O(1) = "constant time" - same speed no matter how much data there is
//         (push, pop, array[5], hash map lookup)
//
// O(n) = "linear time" - speed grows in direct proportion to the data
//         (shift, unshift, looping through an array with .forEach/.filter)
// BIG O CHEAT SHEET (from everything you've built):
//
// O(1) - constant time, same speed no matter the data size
//   push(), pop(), array[index], hash map lookup (object[key])
//
// O(n) - linear time, speed grows with data size
//   shift(), unshift(), .forEach(), .filter(), .map(), looping in general
//
// HASH MAPS (objects) = O(1) lookup by exact key
// Different from arrays which need O(n) to search/filter through
// Different from cryptographic hashing (used for password security,
// one-way scrambling, not for data lookup speed)
// BINARY SEARCH = O(log n)
// ONLY works on SORTED data
// Check the middle -> if target is bigger, ignore left half
//                   -> if target is smaller, ignore right half
// Repeat, cutting the remaining data in half each time
//
// Why it matters: searching 1,000,000 sorted items linearly (O(n))
// could take up to 1,000,000 checks
// Binary search (O(log n)) would only take about 20 checks

/*let users = {
    1: { name: "Sarah", role: "CEO" },
    2: { name: "James", role: "Manager" }
}
users[1]
*/

//MINI PROJECT

let searchInput = document.querySelector(".search-id")
let arrayTime = document.querySelector(".time.array-time")
let arrayBar = document.querySelector(".bar.array-bar")
let HashMapTime = document.querySelector(".time.map-time")
let mapBar = document.querySelector(".bar.map-bar")
let btn = document.querySelector(".run-btn")

let contactsArray = []
for(let i = 0;i<=1000000;i++){
    contactsArray.push({id: i, name:"Contact"+i})
}

let ContactsMap = {}
for(let i = 0;i<=1000000;i++){
    ContactsMap[i] = {id: i, name:"Contact" + i}
}
function searchArray(id){
    return contactsArray.find(contact => contact.id === id)

}
function searchMap(id){
    return ContactsMap[id]
}




btn.addEventListener('click',function(){
    let searchInputNum = Number(searchInput.value)
    let start = performance.now()
    searchArray(searchInputNum)
    let end = performance.now()
    arrayTime.innerText =`Array search took: ${end - start} ms`

    let startMap = performance.now()
    searchMap(searchInputNum)
    let endMap = performance.now()
    HashMapTime.innerText = (`Map search took: ${endMap - startMap} ms`)

    arrayBar.style.width = "100%"
    mapBar.style.width = ((endMap - startMap) / (end - start) * 100) + "%"
})

