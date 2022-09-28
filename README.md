# ProjectAnagram

The complexity of the solutions is O(n) for looping through the dictionary words, plus O(n log(n)) for sorting the words.
I have provided 2 solutions: they are doing the same thing, one of which is a school way and the other is more professional.

The code starts executing from startApp function which is used to read from file in our case that is our 
dictionary. For that purpose to read from file I am using the require method with the assigned fs variable Next in this function I am taking the dictionary 
data, converting it to string so that after that it can be splitted into words using the 
\n pattern. After the dictionary is being processed, then the user is asked to enter 
the word of which we are gonna find all the anagrams from the dictionary.
After the user enters the word we're calling the findAnagrams1(word) function to filter through 
dictionary and find all the anagrams of that word.

Next the 2 solutions are gonna be explained. Note that the dictionary is being stored in global variable.

The findAnagrams1 function takes the word input from the user as an argument. Next empty list is declared in which we are gonna store the final anagrams.
After that new word is being created who is sorted version of the initial word. First is being split into letters with the split("") function then we are sorting
alphabetically with the sort method and after that we use the join method to form the word again.
Next we are looping through the dictionary and we stop word by word and check if its anagram to the test word for which we seek the anagrams.
To perform that we do the same exact process of which we sorted the test word. Now both sorted current word and our test word we check if they are equal. If they are, that means that the current word is anagram and is being pushed to the output list which we declared earlier.

The second function does the exact logic. We take the word and sort it alphabetically as we did in our previous solution.
Next we use the filter method which will return an array of all the words which are anagrams.
In that filter method we are iterating through the dictionary and for each current word we take that word
as previously, split it by letters, sort it alphabetically and form the sorted word. 
After that the filter method will return true if both the current word which is iterated and the sorted word(our test word that is)
if both are equal it will return true. After it loops through the dictionary we use foreach to print all the anagrams on the console.

Instructions on how to run this script.
On windows terminal navigate towards the anagram.js file and run the command: node anagram.js
After that you will be asked to Enter word for which after that will be shown all the anagrams of that word.




