# Software Design/Code Design
- Design: Where form & function meet.
- What your code looks like, more than what it does.
- How easy is it for someone else to understand your code?

## Quotes
- "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
- "Pretend like the person who has to maintain your code is a psychopathic axe murderer, and they know where you live." - Unknown

## Disclaimers
- This is my perspective based on my experience and in no way an edict or even suggestion of how you should write code. This is purely intended to expose you to the ideas and get you thinking.
- This topic is deep and subjective, so for that reason we'll focus on 3 main topics;

# Areas of Focus
- The Single Responsibility Principal
- Test Driven Development
- Why Functional Style Programming is Increasing in Popularity

# Review "Sign up with GitHub" App
- start rails server, open in icognito
- Quick run through
- Thorough run through
  - Normal hyperlink to github login with config in query params
  - after authenticating redirected to redirect_uri with `code` for getting `access_token`
  - we use `access_token` to make API requests on user's behaf
  - we also store `access_token` in local storage to keep user "logged in."
- We'll be focusing on the POST /api/user route `UserController#create`

# Review rails-straight API
- go over fat controller approach

# The Single Responsibility Principal
- The "S" in S.O.L.I.D.
- Everything should do one thing and do it well
  - Every class, method/function; app & organization in general
- How do we define "one thing?" What is as "Unit?"

# Test Driven Development
- Write tests first, software second.
- "TDD encourages simple designs and inspires confidence." - Kent Beck

## Measure twice cut once
- The TDD approach is different, takes more planning
- Go over flow
- Go over create method
  - DI in initializer
- Go into get access token
  - check out tests instead of dependencies

## Wrap up
- TDD Makes you have to think and plan before you code.
- The result is smaller, simpler functions and tests.
- You'll find out there isn't a lot you have to actually test, because most everything you're using is a library covered by its maintainers.

# Why Functional-style Programming is Becoming so Popular
- You can do anything with functions that you can do with classes, except inheritence which is becoming more and more discouraged.
- Good parts of Class-based programming:
  - encapsulation
  - Interfaces/contracts
  - Dependency Injection

