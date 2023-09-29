/ ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.



describe("mixedColors", () => {
  it("takes in an array and removes the first item from the array and shuffles the remaining items", () => {
  expect(mixedColors(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
  expect(mixedColors(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle",   "ochre", "aquamarine", "saffron"]))
  
    })
  
  }) 

// describe('colors1', () => {
//   const expected = ["purple", "blue", "green", "yellow", "pink"];
//   it('matches even if received contains additional elements', () => {
//     expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(["yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(expected));
//   });
// });

// describe('mixedColors', () => {
//   const expected = [
//     "chartreuse",
//     "indigo",
//     "periwinkle",
//     "ochre",
//     "aquamarine",
//     "saffron"
//   ];
//   it('matches even if received contains additional elements', () => {
//     expect([
//       "chartreuse",
//       "indigo",
//       "periwinkle",
//       "ochre",
//       "aquamarine",
//       "saffron"
//     ]).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//     ).not.toEqual(expect.arrayContaining(expected));
//   });
// });

describe('colors1', () => {
  const expected = ["purple", "blue", "green", "yellow", "pink"];
  it('matches even if received contains additional elements', () => {
    expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(["yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('colors2', () => {
  const expected = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ];
  it('matches even if received contains additional elements', () => {
    expect([
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    ).not.toEqual(expect.arrayContaining(expected));
  });
});


// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const mixedColors = (array) => {
//drop the first item 
array.shift()
//shuffle the remaining items
for (let i= 0; i < array.length; i++) {
  mixedColors += array
}

}
console.log(mixedColors(colors1))



// def shuffle_array_and_remove_first_value(array)
// if array.length < 2
// return array
// end 
//   @remove_first_value = array.drop(1)
//   @array.shuffle!

//   colors1 = ["purple", "blue", "green", "yellow", "pink"]
//   colors2 = [
//     "chartreuse",
//     "indigo",
//     "periwinkle",
//     "ochre",
//     "aquamarine",
//     "saffron"
//   ]
// end



def shuffle_array_and_remove_first_value(array)
if array.length < 2
return array
end 
  @remove_first_value = array.drop(1)
  @array.shuffle!

  colors1 = ["purple", "blue", "green", "yellow", "pink"]
  colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
end


// Pseudo code:
// input: an array of string representing colors
// output: the same array of strings representing colors, yet possibly in a different order than the original order of strings. (and the first color listed is removed from array)
// process: In order for the array to be shuffled, there has to be 2 or more values, there needs to be a command that directs the function to remove the first item(I found .shift, and .drop as options), use the "shuffle!" command to shuffle the rest of the values/elements, and list out the arrays of colors that are going to be affected by the commands. 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe ('calculated_votes', () => {
it 'calculates the ending tally of votes'
 votes = {
  expect [votes1 = 11, votes2 = -31]
}

  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 13, downVotes: 2 }
}

expect [votes1 = 11, votes2 = -31]
})



const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 13, downVotes: 2 }
// Expected output: -31

// b) Create the function that makes the test pass.

const calculatedVotes = (array) => {

for(calculatedVotes === 'expected outputs')
  }
  

  console.log(calculatedVotes(votes1, votes2))
class Votes
def initialize(votes1, votes2)
    @votes1 = votes1
    @votes2 = votes2
  end
end 

calculated votes = Votes.new('votes1', 'votes2')
p calculated votes
 

// // Pseudo code:
// input: 2 objects with 2 values
// output: 2 values that represent the tally of votes
// process: Assigning parameters to the class that represent the values that need to be listed. 


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('dataTypesArrays', () => {
describe('dataTypesArray1', () => {
  const expected = ["array", "object", "number", "string", "Boolean"];
  it('matches even if received contains additional elements', () => {
    expect(["array", "object", "number", "string", "Boolean"]).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(["string", "null", "Boolean", "string", "undefined"]).not.toEqual(expect.arrayContaining(expected));
  });
});


const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

const dataTypesArrays = (array) => {
  array.stretch()
 
  for (let i= 0; i < array.length; i++) {
    dataTypesArrays += array
  }
  
  }
  console.log(dataTypesArrays(dataTypesArray1, dataTypesArray2))

def combine_arrays_and_remove_duplicates(array)
if array.length < 2
return dataTypesArray1.concat(["string", "null", "Boolean", "string", "undefined"])
new_array = array.uniq

end 
  @dataTypesArray1 = dataTypesArray1
  @dataTypesArray2 = dataTypesArray2

  dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
  dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
end


// // Pseudo code:
// input: two arrays of strings
// ouput: one array of strings that contains no duplicates
// process: By reasearching, I found the "uniq" method should remove any duplicates from an array. By using the .concat method - this should combine the 2 arrays

