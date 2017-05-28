Solutions to a bunch of excercises drilling my understanding of recursion.

In the solutions, I use an array (memo = []) to store calculated values that the recursive function can access to reduce computing time.
The general pattern I use to retireve data recursively in the same container:
  1. A container function that I call, which returns the memo array and the recursive function
  2. The recursive function is called by the container function. It does the recursion.
  3. To be able to put data in the same array, the container function has to take it as a parameter.

The excercises can be found here: http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php#EDITOR
