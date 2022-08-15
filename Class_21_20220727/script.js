const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}

keys_ = [];
for (const key of urlParams.keys()) {
  console.log(key);
  keys_.push(key);
}
console.log(keys_);

values_ = [];
for (const value of urlParams.values()) {
  console.log(value);
  values_.push(value);
}
console.log(values_);

entries_ = [];
for (const entry of urlParams.entries()) {
  console.log(entry);
  entries_.push(entry);
}
console.log(entries_);

console.log(urlParams.has("q1"));
console.log(urlParams.has("q3"));
