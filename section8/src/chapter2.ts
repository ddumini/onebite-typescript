// keyof 연산자 

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) { 
  return person[key];
}

const person = {
  name: '김수민',
  age: 30,
}

getPropertyKey(person, 'name');