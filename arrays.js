var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array,element){
  var element='foo'
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  var element='foo'
  return array.unshift(element)
}

function addElementToEndOfArray(array,element){
  return [...array,element]
}
