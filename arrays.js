var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array){
  var element='foo'
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array){
  var element='foo'
  return array=[element,...array]
}
