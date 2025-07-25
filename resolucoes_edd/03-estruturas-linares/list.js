let items = [];

function append(element) {
  items.push(element);
}

function insert(position, element) {
  if (position >= 0 && position < size()) {
    items.splice(position, 0, element);
  }
}

function remove(element) {
  const pos = indexOf(element)
  if (pos !== -1){
    removeAt(pos)
  }
}

function removeAt(position) {
    items.splice(position, 1);
}

function removeAt_2(position) {
  if (position >= 0 && position < items.length) {
    items.splice(position, 1);
  }
}

function indexOf(element) {
  return items.indexOf(element);
}

function isEmpty() {
  return items.length === 0;
}

function size() {
  return items.length;
}

function toString() {
  return items.join(", ");
}

function print() {
  console.log(toString());
}


function clear() {
  items = [];
}
