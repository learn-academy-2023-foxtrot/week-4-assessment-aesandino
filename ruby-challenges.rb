# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def odd_or_even(number)
    if number % 2 == 0
        return "Odd"
    else
        return "Even"
    end
end

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# # Pseudo code:
# input: numbers
# output: number with statement that references whwther the number is even or odd. 
# process: using modulo operator to verify if each number is divsible by 2

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def remove_vowels(albums)
    @beatles_album1 = beatles_album1
    @beatles_album2 = beatles_album2
    @beatles_album3 = beatles_album3

        return albums.delete "i", "o", "e", "a", "u".
    end
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# # Pseudo code:
# input: strings
# output: strings with no vowels
# process: use method provided: delete([other_str]+) and remove "i, o, e, a, u"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome_or_not(cases)
@palindrome_test_case1 = 'Racecar'
@palindrome_test_case1 = 'LEARN'
@palindrome_test_case1 = 'Rotator'


    if cases.reverse() == cases
        return 'is a palindrome'
    else
        return "is not a palindrome"
    end
end

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# # Pseudo code:
# input: string
# output: string written backwards while maintaining original capitilization and determining wheather the string classifies as a palindrome. 
# process: using the "reverse" method to spell the string backwards and then creating else statements to associate with the strings that either are OR are not palimdromes. 