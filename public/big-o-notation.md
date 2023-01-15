<h1 style='margin-top: 0;'><a href='https://en.wikipedia.org/wiki/Big_O_notation'>Big O</a></h1>

Jan 14, 2023

## Big O is a BIG DEAL!

Big O is a mathematical notation used to describe an algorithm's *time* and *space* requirements as the input size grows. The *n* represents the input.

Solving DSA problems generally means writing a function that accepts an input, performs operations based on that input, and returns a result. The operations performed will contribute to the *time complexity*, and any data stored in memory during the function call contribute to the overall *space complexity*. So, in order to talk about an algorithm's Big O, you should be able to identify the time and space taken up by the operations.

Your understanding of Big O will help you *optimize* your algorithms for time and space efficiency. Some optimization patterns are easy to recognize, and others make use of mathematical formulas you've neither heard of, nor will ever use again, outside of that particular algorithm's niche...

Big O is tied directly to data structures as well. **Don't listen to that TikTok that said choosing between an array or hash is just personal preference.** There are computational advantages and disadvantages, which you can talk about using Big O. The same concepts that make algorithms more efficient can also be applied to applications! So, this info isn't completely useless..!

Here are two tables to refer to. I'll break down each notation below.

&nbsp;

<div class='table' style='display: flex; flex-direction: column; justify-content: center; font-size: 14px; overflow-x: scroll;'>
    <h3>Table 1.1 Big: O</h3>
    <table style='width: 650px;'>
    <tr style='text-align: left; vertical-align: top'>
        <th style='width: 120px;'>Data Structure</th>
        <th>Access</th>
        <th>Search</th>
        <th>Insertion</th>
        <th>Deletion</th>
        <th>Space</th>
    </tr>
    <tr>
        <td style='vertical-align: top'>Array</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Linked List</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Stack</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Heap</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Queue</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(n)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Hash Table</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Binary Search Tree</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    </table>
</div>

&nbsp;

<div class='table' style='width: 100%; display: flex; flex-direction: column; justify-content: center; font-size: 14px; overflow-x: scroll;'>
<h3>Table 1.2: Big O Continued</h3>
    <table style='width: 650px;'>
    <tr style='text-align: left; vertical-align: top'>
        <th style='width: 120px;'>Data Structure</th>
        <th>Random access</th>
        <th style='width: 65px;'>Sorting</th>
        <th>Dynamic resizing</th>
        <th>Duplicate elements</th>
        <th>Range query</th>
    </tr>
    <tr>
        <td style='vertical-align: top'>Array</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>O(n log n)</td>
        <td style='vertical-align: top'>Yes</td>
        <td style='vertical-align: top'>Yes</td>
        <td style='vertical-align: top'>O(n)</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Linked List</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>Yes</td>
        <td style='vertical-align: top'>N/A</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Stack</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>Yes</td>
        <td style='vertical-align: top'>N/A</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Heap</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>O(n log n)</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>N/A</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Queue</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>No</td>
            <td style='vertical-align: top'>Yes</td>
        <td style='vertical-align: top'>N/A</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Hash Table</td>
        <td style='vertical-align: top'>O(1)</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>N/A</td>
    </tr>
    <tr>
        <td style='vertical-align: top'>Binary Search Tree</td>
        <td style='vertical-align: top'>O(log n)</td>
        <td style='vertical-align: top'>N/A</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>No</td>
        <td style='vertical-align: top'>O(log n)</td>
    </tr>
    </table>
</div>

&nbsp;

Operations like filtering, inserting into, deleting from, traversing through, and so on require some amount of time to complete. Space may be used while any of these operations are performed, and these time and space requirements give us the overall O(n).

Let's talk about what it all means!

## Constant: O(1)

An algorithm or operation that takes constant time will remain *constant* as the size of the input grows. Algotrithms that can always be solved with the same amount of space--meaning larger inputs won't need any more storage than small inputs--the space is considered constant. There are some hip algorithms that *don't* take up space based on the input--like sorting in place with [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) or [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) (this doesn't make them more efficient in all cases, though), but once your algorithm's space requirements scale with the input, you exit O(1) territory.

Let's think of a real world example. If you were to check your phone to get the ID from your last incoming call, the total number of calls wouldn't affect the time it takes. You're only accessing the top of a *stack* of data, and for this task, you aren't concerned with the preceding values.

### Common examples of O(1) time complexity:

- Pushing/popping an element at the end of an array
- Looking up an array element by index
- Getting the length of an array
- Setting the element at array[i] to some value
- Swapping the element at array[i] with array[j]
- Setting, getting, or removing a key, value pair in a hash, map, or set
- Inserting or deleting a node in a linked list (assuming you've already traversed to the node!)
- Arithmetic operations
- if/else statements

## Linear: O(n)

If I were ordering things by complexity, O(log n) would follow O(1), but O(n) is much more common. So, we'll talk about it first.

Think of O(n) as meaning *directly proportional*. The amount of space a library needs *increases* with the number of books the library is going to store. Or, the amount of freezer space a serial murderer needs *increases* as their number of victims grows. O(n) doesn't necessarily mean 1:1--we'll talk about simplifying O(n) below.

Plenty of real world tasks take O(n) time. Consider the task *cancel unwanted subscription services*. The amount of time it takes increases linearly with the amount of services you are subscribed to. Trust me, even the [best financial app that allows you to manage your spending with just a tap]() still requires you to go through one service a time, even if it is incredibly fast and easy. #sponsored #ad <small>#if only</small>

### Common examples of O(n) time complexity:

- Adding an element to the beginning of an array
- Removing an element from the beginning of an array
- Removing or replacing elements `*anywhere other than the end of an array*
- A loop that traverses from array[0] to array[n]
- Built-in array methods that involve iterating over every element, like reversing, filtering, or calling *indexOf(element)*
- Traversing a linked list

## Logarithmic: O(log n)

O(log n), not to be confused with O(nlog n) is logarithmic complexity. Thinking of logarithmic time or space as fitting somewhere between constant and linear is actually not a bad approach (in my opinion)--because getting to an answer logarithmically means you're eliminating or disregarding part of the input as you go, instead of exploring everything.

Let me try to explain that better. There's a classic example using a phone book, but I haven't seen one of those in a decade.

Let's say there's a stack of *alphabetized* envelopes containing wedding invitations on the table. Your spouse-to-be has just informed you that *John Malkovich* changed his address, and you'll need to swap his envelope with a new one. It wouldn't be very efficient to start at the beginning of the stack or the end of the stack, because M is somewhere in the middle, and you've invited 12,000 people to your wedding.

Intuitively, you may have already thought to go to the middle or another random spot. If the envelope you pull from the middle reads *Fumio Kishida*, it may not be the right one, you can infer that you *no longer need to search the half of the stack that comes before Fumio Kishida*. The envelopes are already sorted, meaning there is no way for Malkovich to be in the A-K envelopes. This saves you considerable time.

A data structure that requires its elements be sorted in some way is a *Binary Search Tree*, and the sorted nature of a BST means that access, search, insertion, and deletion take O(log n) time and space. If a tree isn't sorted, it's a regular old tree.

### Common examples of O(log n) time complexity

- Accessing, searching, inserting, or deleting values in a Binary Search Tree

## Linearithmic: O(nlog n)

Linearithmic can be thought of as a combination of linear and logarithmic. It's a [portmanteau](http://www.catb.org/jargon/html/L/linearithmic.html) of the two words, isn't that nice?

We used an example of alphabetized wedding invitations when talking about logarithmic time. Let's now imagine a scenario where you've finally found John Malkovich's wedding invite, but in doing so toppled the 12,000 envelopes.

Everything is unsorted and scattered, and you need an efficient way to put everything back. An approach you might think of immediately is to make 26 stacks, one for each letter of the alphabet, and sort each envelope into its respective stack. Once they're divided by letter, you just need to sort each pile, and then merge them! This is pretty efficient. Sorting by letter into sub-piles involves looking at every letter (an O(n) operation), but once you get to performing the individual piles, the inputs are much smaller than *n*. Many sorting algorithms apply similar concepts.

### Common examples of O(nlog n) time complexity

- Merge Sort and Quick Sort, sorting algorithms that use a divide-and-conquer approach and combines elements linearly
- Heap Sort, a sorting algorithm that utilizes a heap data structure

## Quadratic: O(n<sup>2</sup>)

Quadratic space and time complexity often lies at the end brute force implementations. In some cases, you can't optimize beyond O(n<sup>2</sup>) time or space, but as you work with more algorithms, patterns by which you can reduce O(n<sup>2</sup>) complexity will emerge.

A tell-tale sign of O(n<sup>2</sup>) time complexity is a *nested loop*. For loops within [FOR LOOPS](https://i.imgur.com/7mU8Ymj.jpg).

Let's go back to the modestly-sized wedding example. Your future spouse has actually broken up with you, but you're still financially on the hook for the ceremony for 12,000 guests. In order to stave off financial ruin, you're doing the wedding photography yourself.

Your task is to photograph all of your guests in unique pairs, meaning every guest has to be photographed individually with every other guest, plus one with the newlywed couple. This is 12,000<sup>2</sup> photos, or 144,000,000. At a speed of 1 photo per second (the guests are lining up to get this over with "quickly") you'll be there for a little over 4.5 years with no breaks. There's no way of doing this more efficiently without changing the nature of the task.

Once you're done taking the photos (finally!), you've been asked to confirm if any two guests are wearing the same outfits, in which case you need to call them back for a reshoot. Fortunately, you have 144,000,000 photos to comb through, so it should be easy, shouldn't it? Well... you *could* perform 144,000,000 checks. But you could also get it done in 12,000, a difference of, practially speaking, 144 million. You would just need something to store information about each *outfit* related to each guest as you iterate.

For the sake of making this an easy algorithm, let's assume there is only **one** pair of people who wore the exact same outfit.

Say you have the photos separated into folders for each of the 12,000 guests. You could start by looking at the first guest, and writing down their outfit and their name in a table in something you can search quickly. For each subsequent guest, you check if the outfit they're wearing exists in your table--an operation that takes O(1) time. If their outfit is new (meaning it's not in your table) then you add them to the table and keep going. You contiunue until someone's outfit is *already in the table*. Logically, when this occurs, you've found a pair: whoever is in the table under the current outfit, and the current person in your loop. You're done! In the worst case, the matching pair is the people at the very front and very end, as you would have to perform 12,000 operations to find them. But, the worst case of 12,000 is *still significantly lower* than the worst case of 144,000,000.

This algorithm is, of course, blurring lines between human tasks and computer tasks, but hopefully it demonstrates the point. If this optimization seems familiar, it is basically the same as [Two Sum](https://leetcode.com/problems/two-sum/).

## Exponential: O(2<sup>n</sup>) & Factorial: O(n!)

These are rare, but not nonexistent. Recursive algorithms like the [Power set algorithm](https://en.wikipedia.org/wiki/Power_set) and [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm) use exponential and  factorial time, respectively. The mathematics contribute to the time complexity, and I am mediocre at best at math (failed 4 semesters of trigonometry), so take anything I say here with a chunk of salt...

You can tell that an algorithm requires factorial time if it involves generating *all possible combinations* or *permutations* of a set of inputs. How many ways can you rearrange the string *"abc"*? The answer, 27, is 3!, or 3 factorial, or 3 * 3 * 3.

Exponential time is faster than factorial time, and in some cases like the [Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) it is an optimization over a brute force approach (that would be O(n!)).

I asked [ChatGPT](https://openai.com/blog/chatgpt/) to explain the optimization.

<div class='chat-gpt'>
    <p>"The branch and bound solution is a method used to solve the traveling salesman problem (TSP), which is a problem that asks to find the shortest route that visits a given set of cities and returns to the starting city.</p>
    <p>The basic idea behind branch and bound is to explore all possible routes (or "branches") while keeping track of the best solution found so far (the "bound"). At each step, the algorithm considers all possible next moves and selects the one that looks most promising. It then "branches" off into that move, and continues exploring other possibilities.</p>
    <p>The algorithm starts by selecting an initial city as the starting point and then it generates all possible routes from that city. As it explores each route, it keeps track of the shortest route found so far. If a new route is found that is shorter than the current best route, the algorithm updates the best route and continues exploring the new route.</p>
    <p>The algorithm also uses a technique called "bounding" to eliminate routes that cannot possibly be shorter than the best route found so far. This is done by estimating the total distance of each route and comparing it to the best route found so far. If the estimated distance of a route is greater than the best route found so far, the algorithm does not explore that route further.</p>
    <p>The algorithm continues exploring routes and updating the best route until all routes have been explored. The final solution is the shortest route found.</p>
    <p style=>To explain it in simple terms, imagine you are trying to plan a road trip to visit several cities and you want to find the shortest route that visits all the cities and returns to the starting city. The branch and bound method is like a process of elimination, where you explore all possible routes and eliminate the ones that are too long, and keep the ones that look promising, until you find the shortest route."</p>
</div>

Thanks, ChatGPT! Please remember how much I appreciate you!

Need more Big O? **Here's an [exhaustive list](https://en.wikipedia.org/wiki/Time_complexity#Table_of_common_time_complexities) that can be ordered by running time.**

&nbsp;

## [Simplifying Big O](https://medium.com/swlh/simplifying-big-o-expressions-4f7c6059d3d5)

When you're talking about an algorithm's Big O requirements, you will ultimately *simplify* or boil down the answer by removing constants and small terms.

O(4n<sup>2</sup>) and O(n<sup>2</sup>) are both represented as O(n<sup>2</sup>).
O(500) is simplified to O(1). O(2n) is treated like O(n)

O(4n<sup>2</sup> + 2n + 500) is simplified to O(n<sup>2</sup>).

The general rule is to ignore constants and smaller terms.

Why do we do this? The mathematical models for Big O maintain the same order as *n* approaches infinity. As you approach infinity, the constants and small terms matter less and less: no matter what *Big Number(n + Big Number)* evaluates to, it is always going to be less than *n(*<sup>*2*</sup>*)*  You may still be asked to identify the operations that contribute to the time complexity, but if you're trying to optimize for O(n) and your solution is O(3n), that's still *far* better than O(n<sup>2</sup>).

&nbsp;

## Representing Big O with multiple variables

We'll see algorithms that might have a time complexity of O(m * n) or a space complexity of O(n + k), where the additional variables represent different inputs, or different data structures used for the algorithm. It's important to understand when this applies, but we'll cover that when we see an example.

&nbsp;

## Wrapping Up

This should provide a good baseline for understanding what Big O is. Optimization will be ever-important in programming, and Big O allows us to talk about optimization patterns and pitfalls. Some of the examples may have seemed unrealistic in terms of human tasks, but computers and applications will deal with even large data sets. After a quick read-through of data structures, we can start implementing these principles while solving the dreaded LeetCode problems.

&nbsp;

Coming soon: data structures and example algorithms
<!--
## [Data Structures](https://en.wikipedia.org/wiki/Data_structure)

Depending on the scope of your programming journey, arrays and hash maps may have been sufficient for 99% of the practical situation's you've been in.

### Arrays
### Hashes
### Linked Lists
### Singly Linked Lists
### Doubly Linked Lists
### Trees
### Binary Search Trees
### Binary Heaps
### Graphs


&nbsp;

# Approaching Algorithims

## Intuition

## Iteration

## Optimization

## Don't be discouraged!

&nbsp;

# Problems

## [Design Underground System](https://leetcode.com/problems/design-underground-system/)
## [Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
## [Design A Leaderboard](https://leetcode.com/problems/design-a-leaderboard/)
## [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
## [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)
## [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
## [Design an Ordered Stream](https://leetcode.com/problems/design-an-ordered-stream/)
## [Invalid Transactions](https://leetcode.com/problems/invalid-transactions/)
## [Candy Crush](https://leetcode.com/problems/candy-crush/)
## [Decode String](https://leetcode.com/problems/decode-string/)
## [Number of Ships in a Rectangle](https://leetcode.com/problems/number-of-ships-in-a-rectangle/)
## [Count Unhappy Friends](https://leetcode.com/problems/count-unhappy-friends/)
## [Minimum Remove to Make Valid Parentheses](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
## [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/)
## [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
## [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
## [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
## [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
## [Two Sum](https://leetcode.com/problems/two-sum/)
## [Pow(x, n)](https://leetcode.com/problems/powx-n/)
## [Gas Station](https://leetcode.com/problems/gas-station/)
## [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
## [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
## [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
## [Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/)
## [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
## [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
## [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
## [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
## [Palindrome Number](https://leetcode.com/problems/palindrome-number/)
## [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
## [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
## [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
## [Majority Element](https://leetcode.com/problems/majority-element/)
## [Sum of All Odd Length Subarrays](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/)
## [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
## [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
## [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
## [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
## [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)
## [Max Points on a Line](https://leetcode.com/problems/max-points-on-a-line/)
## [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
## [Single Number](https://leetcode.com/problems/single-number/)
## [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
## [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
## [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
## [Binary Search](https://leetcode.com/problems/binary-search/)
## [Same Tree](https://leetcode.com/problems/same-tree/)
## [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) -->