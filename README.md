# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Setup steps: Create an assets folder, and place the images folder within it. Also create folders for css and js inside assets, then create a styles.css file and a script.js file inside their respective folders. Link the favicon, fontawesome library, Google font, and styles.css in the head. Include the script tag in the head as well, with a defer attribute. Write the custom variables and the universal reset in styles.css.

Working on the HTML: Create a main element to hold the content, and a class of flex-container to be used to center it on the page. Create a section container to hold the FAQs card, and give it two direct children. The first is div that is a flex row, holding the sparkle icon and the h1. The second is a ul, holding 4 li element, one for each FAQ. Each li contains a flex row div which holds the question and the plus/minus icon. The second child of each li (sibling to the div) is a p element, the answer to the question.

Styling: After the reset and some default styles, I placed the background-image on the body::before pseudo-element to have some more flexibility with its position and shrinking/expanding for different screen sizes. Next I have some basic flexbox rules before moving on to the card and its descendant elements. Then I did the hover and focus state styles for the questions, and the styles for the expanded state. Lastly I have the media query which changed the background-image to its mobile version, and tweaked the sizes of some elements.

JavaScript: Define the event handler function, expandHandler. This function works by accessing the icon element (the plus/minus sign) and toggling which fontawesome class is applied to it. It also toggles the expand class on the answer. To breakdown how the respective elements are accessed: For the icon, start with e.currentTarget (which will always be an <li>, since that's the element the listener is on), then traverse to its first child element (the flexrow div), then traverse to that element's second child, which is at index 1 (the icon). For the answer, once again start with e.currentTarget, and traverse directly to its second child, the p.answer element. After the function definition are the event listeners. We use querySelectorAll to access all of the faq list items, then use .forEach to place two event listeners on each list item. The first event listener is for the click event, at which point it calls expandHandler. The second event listener is for the keydown event, which first checks to see if the Enter key was pressed, and if so, it invokes expandHandler. This second event listener is responsible for keyboard navigation.

### Built with

HTML, CSS, and vanilla JS

### What I learned

This was a good practical exercise for me in writing JS. I know there are HTML elements (<details> and <summary>) that can be used to make an accordion menu with no JS, but this was good practice. I had not previously defined an event handler before (meaning I had always just used anonymous arrow functions) so this was a little bit of a learning experience for that syntax, especially in regards to passing in the e parameter vs the faq parameter from the forEach method.

### Continued development

In the future I just want to continue getting more comfortable writing practical JS, especially in regards to making it concise and following best practices.

## Author

- Frontend Mentor - [@leven-carr](https://www.frontendmentor.io/profile/leven-carr)
- GitHub - [@leven-carr](https://github.com/leven-carr)
