// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  retrn kittens
}

function appendKitten(name){
  return [...kittens,name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(){
}

function removeFirstKitten(){
}