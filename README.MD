# Instant Contact Lookup — O(1) vs O(n) Benchmark 🔬

A visual, measurable demonstration of why hash maps (objects) are faster than arrays for lookups, using real timed searches across 1,000,000 contacts.

## How it works

The same 1,000,000 contacts are stored two ways:

```javascript
// Array — must search item by item
let contactsArray = [{ id: 0, name: "Contact0" }, ...]

// Hash map — direct lookup by key, no searching
let contactsMap = { 0: { id: 0, name: "Contact0" }, ... }
```

Searching the array uses `.find()`, checking each item until a match is found, **O(n)**, gets slower as the dataset grows.

Searching the hash map uses direct key access, `contactsMap[id]`, **O(1)**, jumps straight to the result regardless of dataset size.

Both searches are timed with `performance.now()`, and the results are shown as both exact millisecond values and animated bars for a clear visual comparison.

## Features
- 1,000,000 generated contacts, stored as both an array and a hash map
- Live search comparing `.find()` (O(n)) vs direct key lookup (O(1))
- Real millisecond timing using `performance.now()`
- Animated bar visualization scaling to the actual time difference
- Dark lab/dashboard styled UI

## Tech Stack
- HTML5
- CSS3
- JavaScript (arrays, hash maps/objects, Big O in practice)

## What I Learned
This project made Big O notation concrete instead of theoretical. Watching a hash map lookup complete in under a millisecond while an array search on the same data took measurably longer, on the exact same dataset, made the O(1) vs O(n) difference something I could see and measure, not just recite.