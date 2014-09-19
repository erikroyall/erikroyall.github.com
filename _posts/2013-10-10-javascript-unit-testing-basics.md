---
title: Basics of Unit Testing JavaScript
author: Erik Royall
layout: post
excerpt: One thing you should really care about when writing code, whether it's JavaScript or any other programming language, is it's working. When you write a piece of code, you want it to work as expected, without any difference, and that's why you write code after all. Think about a situation where you've literally written thousands of lines of code. You are sure that it works properly, but, will it? The answer is *not always*.
---

One thing you should really care about when writing code, whether it's JavaScript or any other programming language, is it's working. When you write a piece of code, you want it to work as expected, without any difference, and that's why you write code after all. Think about a situation where you've literally written thousands of lines of code. You are sure that it works properly, but, will it? The answer is *not always*.

> Unit testing enables you to write code and make it work the way you expected it to

### So, what is unit testing, anyway?

The [Wikipedia definiiton](http://en.wikipedia.org/wiki/Unit_testing) for unit testing goes on like this:

> Unit testing is a method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures are tested to determine if they are fit for use

I don't know if it makes sense to you, it doesn't to me. That's the reason I have my own definition of it. Simply put:

> Unit Testing is a method by which you can test if a piece of code works as expected

By now, I hope you know what unit testing is and how it's useful in writing code.

### Enough telling about unit testing, tell me how to

OK. Sorry. I'll get to the point - How to (and what to) unit test?

#### What do we need to test for?

Speaking in context of JavaScript, we need to test if doing something returns expected results. Some of the things that are often tested are:

 - Return values of functions
 - Properties of DOM elements
 - Values of variables manipulated by closures

In fact, everything in JavaScript can be tested and that's pretty easy.

#### How to test?

There are a lot of ways to test and there are even frameworks like [Jasmine](http://pivotal.github.io/jasmine), [QUnit](http://qunitjs.com/) which will make the job easier. But for now, to keep his article simple (and as I'm a fan of vanilla JavaScript), I am not going to use a Unit testing framework. Instead, we will be writing a simple function `assert` which will be used throughout the article.

    /**
     * Simple assertion function
     * 
     * @param {Any} obj The first object
     * @param {Any} ano The object to test against
     * @return {Bool} If obj is exactly equal to ano
     */
    function assert (obj, ano) {
      return obj === ano;
    }

Really simple function, isn't it? I've even written the documentation for you so that you can easily understand it. And now that we have our main tool for the job, let's put it into use.

### Testing code

To keep this article simple (and as I'm too lazy to write), I'll test really simple things. I'll not be testing DOM things, though that's really easy (Setting the properties of elements and testing if they're set), just because I don't want to deal with browser-things in this article.

First, before testing, I'll write some code. But what code? Well, let's make a simple function `add()` that will add two numbers. And even before that I'll make a few expectations about the working of that function:

 - It should take two numbers as input, add them, and return them
 - If less than or more than two inputs are given, it should throw an error

The code is really simple, believe me. Here it is:

    /**
     * Add two numbers
     * 
     * @param {Number} n1 The first number
     * @param {Number} n2 The second number
     * @return {Number} Sum of n1 and n2
     */
    function add (n1, n2) {
      // arguments is an array of arguments passed
      // So, arguments.length is the number of arguments
      if (arguments.length !== 2) {
        throw new Error ();
      }

      return n1 + n2;
    }

Now we need to test if it works as expected.

    assert(add(1, 4), 5) // true
    assert(add(45,34), 80) // false

Congratulations! You've learned how to unit test your code! I've covered the most basic stuff about unit testing in JavaScript and there's a lot more to learn about it. But this article is about basics, right?

And I've some homework for you:

 - Make a function that tells if one value is less than the other value. And similarly another that tells if it's greater than.
 - Write functions to assert whether the object is a(n)
    - Object
    - String
    - Function
    - String
    - Boolean

Thanks for reading this article. And don't forget to submit your homework below and ask if you have any questions regarding Unit testing.