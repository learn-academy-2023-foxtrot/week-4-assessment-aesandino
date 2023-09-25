# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AS

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object oriented programming is the definition of the acronym O.O.P. It's different from functional programming as the value is an object and each of the modifying commands affect the object - instead of the value. 

Researched answer: Ruby is one of the programming languages where everything is oriented around an object. The modifications are affecting objects. The four principles of OOP that are used within Ruby are: encapsulation, inheritance, polymorphism, and abstraction. OOP differs from functional programming regarding the type of data supported by the programming method - OOP = mutable while FP = immutable data. 

2. Ruby has an implicit return. What does that mean?

Your answer: An implicit return from the programming language of Ruby means that the output will have a direct correlation to the input. 

Researched answer: An implicit return acts as a shortcut. This shortcut possesses the ability to return values without using the return keyword. An EX) of function with implicit return is:  

const getOrderId = () => 'Order-1';

The getOrderId() function above returns a string of Order-1 without using the *return* keyword. 

Citation for EX): https://tekloon.dev/implicit-return 


3. What is a block in Ruby?

Your answer: A block in Ruby always has an "end" and it is similar to a "code - block" from Javascript. 

Researched answer: Ruby blocks are mini functions that are passed through methods. Ruby blocks begin with a "do" and end in an "end" OR they end between these: {}. 
Ruby blocks can also contain many arguments. For Ruby blocks you don't need to define a name and it is always necessary to pass a method call. 

4. How do you extract a single value from a Ruby hash?

Your answer: To extract a single value from a Ruby hash - you need to place the value inside of the curly brackets listed here: #{} ***(wrong answer)***

Researched answer: To extract a single value from a Ruby hash you can use the hash class method of: delete(). 
Here is an EX) of how this is used in Ruby:
# create hashes
h1 = {one: 1, two: 2, three: 3}
h2 = {name: "okwudili", stack: "ruby"}
h3 = {"foo": 0, "bar": 1}

# delete some keys
# and print return values
puts h1.delete(:three)
puts h2.delete(:stack)
puts h3.delete(:bar)

# now print hashes
puts h1
puts h2
puts h3

Citation for EX): https://www.educative.io/answers/how-to-delete-an-entry-of-a-hash-by-specifying-its-key-in-ruby


5. STRETCH: What is a version manager?

Your answer: A version manager is a version of Ruby...? 

Researched answer: Version managers are a convinient way to install different versions of Ruby onto different local devices. 

## Looking Ahead: Terms for Next Week

1. Test-driven development: A software developers tool to format a rough draft of what they are about to code. 

2. PostgreSQL: A reputable database that manages data for many apps and websites. 

3. CRUD: CRUD is used as an acronym that represents Create, Read, Update, and Delete. These four processes are needed to create high quality code. 
