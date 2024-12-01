// Sets are a collection of unique values
const ids = new Set([1, 2, 3, 4, 5]);
ids.add(2);
console.log(ids.has(2)); // true

for (const entry of ids.entries()) {
  console.log(entry); // [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]
}

for (const entry of ids.values()) {
  console.log(entry); // 1, 2, 3, 4, 5
}

ids.delete(2); // removes 2 from the set and doesn't throw an error if it doesn't exist

// ----------------------------------------------------------------------------------------------------------------

// Maps are a collection of key-value pairs
const person1 = { name: "Max" };
const person2 = { name: "Manuel" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

console.log(personData);
console.log(personData.get(person1)); // [{ date: 'yesterday', price: 10 }]
console.log(personData.size); // 2

// iterating over maps
for (const [key, value] of personData.entries()) {
  console.log("key value", key, value);
}

for (const entries of personData.entries()) {
  console.log("entries", entries);
}

for (const key of personData.keys()) {
  console.log("key", key);
}

for (const value of personData.values()) {
  console.log("value", value);
}

// ----------------------------------------------------------------------------------------------------------------

// WeakSet and WeakMap - garbage collection

let person = { name: "Max" };
const persons = new WeakSet();
persons.add(person);

// after some time
person = null; // person object is garbage collected

console.log(persons);

const personDataWeakMap = new WeakMap();
personDataWeakMap.set(person, "extra info");

person = null; // person object is garbage collected

console.log(personDataWeakMap);
