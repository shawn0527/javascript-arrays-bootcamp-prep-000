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

function destructivelyAddElementToBeginningOfArray(array){
  var element='foo'
  const array=[element,...array]
}
