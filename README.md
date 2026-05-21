1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById: Finds an element by its id, return one element
getElementByClassName: Finds element by their class, returns all matching elements as a list
querySelector: Finds the first element that matching any CSS selector
querySelectorAll: Finds all elemnents that match any CSS selector


2. How do you create and insert a new element into the DOM?
Answer:
Create the element using document.createElement("div") , add content or attribute like text, class, id, etc. , insert it into the page by packing a parent element and using something like appentChild() or append().


3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling is when clicked on a nested element, and the click event bubbles up from the innermost element to its parent, then to the grandparent, and so on, all the up to the top.
If clicked the button: button get clicked first(child), event moves up to the parent div, then up to the grandparant div, then up to the body, then up to the document.


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is when a single event listener is putted on a parent element instead od putting separate listener on each child element. The parent listener for events that bubbles up from its children.
It is useful because: takes less memory, dynamically added children also works, cleaner code, better performance.


5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault(): stops the default behavior of an element.
stopPropagation(): stops the event from bubbling up to parent element.

