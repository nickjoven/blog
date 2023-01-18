# [Intro to Recursion](https://en.wikipedia.org/wiki/Recursion)
---

Jan 17, 2023

<div style='background-color: #0d1117; padding: 1%; border-radius: 5px;'>
<small>Today was the third of an 11-part-installment of classroom-style lectures hosted by [NYC Coders](https://www.meetup.com/nyc-coders/), a local meetup group. I had a great time but won't bore you with the non-code details!</small>
</div>

## What is recursion?

- Recursion is a method of solving a problem that involves solving a <small>smaller part of the problem that involves solving a <small>smaller part of the problem that involves solving a <small>smaller part of the problem that involves solving a smaller part of the problem</small></small></small>... <br />until it eventually terminates after reaching a *base case*.
- Execution order is determined by a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) (last in first out data structure)

A function is recursive if these three things are true:
- The function terminates upon reaching a base case
- The function calls upon itself
- The function converges on the base case

A recursive function calls itself within the function body. Without a base case to instruct the function to return before the recursive call, it will occur infinitely (or as long as your computer allows). For algorithms, you will sometimes implement a recursive function as part of the solution, like a helper that explores the input, while the solution itself is not called recursively.

## [Infinite Loops](https://en.wikipedia.org/wiki/Stack_overflow#:~:text=The%20most%2Dcommon%20cause%20of,can%20fit%20on%20the%20stack.)

Modern programs will limit the execution of recursive functions if a call stack pointer exceeds the acceptable stack bound. The phenomenon is fondly referred to as stack overflow.

## The Call Stack and the Global Execution Context

Computers use memory to compute functions. Let's write out how *global memory* and *local memory* are updated in the *global execution context* given the following block of code:


<div class='code-block'>

```javascript
const countdown = (n) => {
    console.log(n)

    // base case
    if (n === 0) {
        return
    }

    // recursive call
    countdown(n - 1)

    return
}

countdown(3)
```
</div>

- *countdown(3)* calls the function *countdown* with *parameter* 3.
- Label *countdown: f* is added to global memory.
- An *execution context* called countdown(3) is created.
- In *context: countdown(3)*, a label *n: 3* is committed to the local memory.
- The base case is evaluated (as false)
- *countdown(2)* is invoked, creating another execution context, and so on, until a base case is reached.

The stack ends when *countdown(0)* is invoked. This does three things:

- countdown(0) is popped from the top of the call stack.
- The execution context created for countdown(0) is removed from memory.
- The local memory associated with countdown(0) is cleared.

This brings us back up to *countdown(1)*, which is able to continue until it hits a return statement--

And, again, hitting a return statement will pop the function from the top of the stack, and remove the local execution context for that function and its local memory.

Since this example isn't doing much with the return values or executing anything between the recursive calls and the return on the bottom line, we pop functions off of the stack (in LIFO order) quite quickly.

## Practice Example 1

Write a function that accepts an array of integers *nums* and calculates the sum recursively.

<div class='code-block'>

```javascript
const sum = (nums) => {
    // base case
    if (nums.length === 1) {
        return nums[0]
    }
    // recursive call
    return nums[0] + sum(nums.slice(1))
}
```
</div>

### Does the algorithm call upon itself, and converge upon the base case?
*nums.length === 1* is the base case. Each call of the function that does not satisfy the base case calls *sum(nums.slice(1))*, effectively using an input that is one element shorter than the initial input. This will approach a case in which the input === 1.


## Practice Example 2

Write a function that reverses a string. The input string is given as an array of characters s.

<div class='code-block'>

```javascript
const reverseString = (s, left = 0, right = s.length - 1) => {
    // base case
    if (left > right) {
        return s
    }
    // swap left and right
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    // recursive call
    return reverseString(s, left + 1, right - 1)
}
```
</div>

### Does the algorithm call upon itself, and converge upon the base case?
*left > right* is the base case. Each function call that does not satisfy the base case uses inputs *left + 1* and *right - 1*, which means each iteration moves left and right closer together. They will eventually converge, giving us our base case.

## Practice Example 3

<div class='code-block'>

```javascript
const numberOfSteps = (num) => {
    // base case
    if (num === 0) return 0
    // recursive call with a conditonal
    if (num % 2 === 0) {
        return 1 + numberOfSteps(num / 2)
    } else {
        return 1 + numberOfSteps(num - 1)
    }
}
```
</div>

### Does the algorithm call upon itself, and converge upon the base case?
The base case *num === 0* is reached by the mathematical operations performed on *num*. The input number shrinks (by divisions of 2 or subtractions of 1) until it finally reaches zero. Shout out to my new pair programming friends Siddharth and Glen!

## Wrap Up

This was a short post, but I'll save doing a deep dive for later. Recursion isn't always the answer (the call stack has space overhead that you might be able to avoid with an iterative solution) but we'll see situations that benefit from or necessitate recursion with algorithm examples and certain data structures.








