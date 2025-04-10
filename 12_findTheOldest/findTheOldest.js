const findTheOldest = function(people) {
  let oldestAge = 0
  let oldestPerson
  people.forEach((person) => {
    let birth = person.yearOfBirth
    let death
    if (typeof person.yearOfDeath === "undefined") {
      death = 2025
    } else {
      death = person.yearOfDeath
    }
    
    const age = death - birth
    if (age > oldestAge) {
      oldestAge = age
      oldestPerson = person
    }
  })

  return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
