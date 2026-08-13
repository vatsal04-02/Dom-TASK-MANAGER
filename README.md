# DOM Explorer --- Interactive Task Manager

## 📌 Project Overview

**DOM Explorer** is an interactive Task Manager built using **HTML, CSS,
and Pure JavaScript**.

The project demonstrates how JavaScript interacts with the browser's
DOM, how events travel through the DOM tree, and how a browser converts
HTML/CSS/JavaScript into the final webpage.

### Features

-   Create new tasks
-   Assign categories to tasks
-   Edit existing tasks
-   Mark tasks as completed
-   Delete tasks
-   Store tasks using Local Storage
-   Dark/Light theme toggle
-   Event Bubbling demonstration
-   Event Capturing demonstration
-   Event Delegation demonstration
-   Browser Rendering Pipeline visualization

------------------------------------------------------------------------

# 🧠 Concepts Demonstrated

## 1. Parsing

When the browser receives an HTML document, it first parses the HTML
source code.

The browser reads the HTML and converts it into a structured
representation that can be understood by the browser.

Example:

``` html
<h1>Hello</h1>
<p>Welcome</p>
```

The browser parses these elements and creates nodes that later become
part of the DOM Tree.

### In this project

The browser parses:

-   `task.html`
-   CSS files
-   JavaScript files

------------------------------------------------------------------------

## 2. Tokenization

During HTML parsing, the browser breaks the HTML source into tokens.

For example:

``` html
<div class="task-card">
    <h2>DSA</h2>
</div>
```

The browser identifies tokens such as:

``` text
Start tag: div
Attribute: class="task-card"
Start tag: h2
Text: DSA
End tag: h2
End tag: div
```

These tokens are then used to construct the DOM Tree.

------------------------------------------------------------------------

## 3. DOM Tree

DOM stands for **Document Object Model**.

The browser represents HTML as a tree of objects.

For example:

``` text
Document
│
└── html
    │
    └── body
        │
        └── main
            │
            └── div.task-container
                │
                └── div.task-card
                    ├── div.card-top
                    ├── div.task-content
                    │   ├── h2
                    │   └── p
                    └── div.card-bottom
```

In this project, JavaScript dynamically creates these nodes using
methods such as:

``` js
document.createElement()
```

and:

``` js
append()
```

------------------------------------------------------------------------

## 4. CSSOM Tree

CSSOM stands for **CSS Object Model**.

The browser parses CSS and creates a representation of the CSS rules.

For example:

``` css
.task-card {
    width: 280px;
    border-radius: 24px;
}
```

The browser uses these rules to determine how DOM elements should be
styled.

The DOM Tree and CSSOM Tree are combined to determine the visual
structure of the webpage.

------------------------------------------------------------------------

## 5. Render Tree

The browser combines relevant information from the DOM and CSSOM to
create the **Render Tree**.

Simplified flow:

``` text
HTML
 ↓
DOM Tree
      \
       → Render Tree
      /
CSS
 ↓
CSSOM Tree
```

The Render Tree contains the elements that need to be displayed on the
screen.

------------------------------------------------------------------------

# ⚡ Events

## 6. Event Bubbling

Event bubbling means that when an event occurs on a child element, the
event travels upward through its parent elements.

Example:

``` text
Grandparent
    ↑
  Parent
    ↑
  Child
```

If the Child button is clicked, the order during bubbling is:

``` text
Child
Parent
Grandparent
```

### Demonstration

The project contains a nested structure:

``` text
Grandparent
└── Parent
    └── Child Button
```

Clicking the Child Button logs the execution order in the Console.

------------------------------------------------------------------------

## 7. Event Capturing

Event capturing is the opposite direction of bubbling.

The event travels from the outer element toward the target element.

``` text
Grandparent
    ↓
  Parent
    ↓
  Child
```

The execution order is:

``` text
Grandparent
Parent
Child
```

Capturing can be enabled using:

``` js
element.addEventListener("click", handler, true);
```

The third argument `true` enables the capturing phase.

------------------------------------------------------------------------

## 8. Event Delegation

Event Delegation allows one event listener on a parent element to handle
events from multiple child elements.

Instead of attaching separate listeners to every task button:

``` text
Delete → listener
Edit → listener
Complete → listener
```

the project can attach one listener to:

``` text
.task-container
```

Example structure:

``` text
task-container
├── task-card
│   ├── Delete
│   ├── Edit
│   └── Complete
│
├── task-card
│   ├── Delete
│   ├── Edit
│   └── Complete
```

One parent listener can identify which button was clicked.

Example:

``` js
taskContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {
        // Delete task
    }

    if (event.target.classList.contains("edit-btn")) {
        // Edit task
    }

    if (event.target.classList.contains("complete-btn")) {
        // Complete task
    }

});
```

This reduces the number of event listeners required for dynamically
generated cards.

------------------------------------------------------------------------

# 🎨 Browser Rendering Pipeline

The project also demonstrates the simplified browser rendering process:

``` text
HTML
 ↓
Parsing
 ↓
DOM Tree
 +
CSSOM Tree
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
 ↓
Screen
```

### DOM

Defines the webpage structure.

### CSSOM

Defines styling information.

### Render Tree

Combines the information needed for rendering.

### Layout

Calculates the size and position of elements.

### Paint

Draws text, colors, borders, shadows, and other visual content.

### Composite

Combines rendered layers and displays the final result.

------------------------------------------------------------------------

# 💾 Local Storage

Tasks are stored using browser Local Storage so that they remain
available after refreshing the page.

Example:

``` js
localStorage.setItem(
    "tasks",
    JSON.stringify(productsArr)
);
```

To retrieve them:

``` js
const tasks =
    JSON.parse(localStorage.getItem("tasks")) || [];
```

------------------------------------------------------------------------

# 🛠️ Tools Used

## Visual Studio Code

Used to write and organize:

-   HTML
-   CSS
-   JavaScript
-   README documentation

## Browser DevTools

DevTools can be opened with:

``` text
F12
```

or:

``` text
Ctrl + Shift + I
```

### Console

Used to inspect:

-   Event order
-   JavaScript output
-   Objects
-   Arrays
-   Errors

Example:

``` js
console.log(productsArr);
```

### Elements

Used to inspect the generated DOM Tree.

You can create a task and watch JavaScript dynamically add:

``` html
<div class="task-card">
```

### Application → Local Storage

Used to inspect the tasks saved by the application.

### Performance

Can be used to investigate the browser rendering process and page
performance.

------------------------------------------------------------------------

# 🚀 How to Run

1.  Open the project folder in Visual Studio Code.
2.  Open `task.html`.
3.  Use Live Server or open the HTML file in a browser.
4.  Create a task using **Create New Task**.
5.  Test Edit, Complete, and Delete.
6.  Refresh the page to verify Local Storage.
7.  Open DevTools to inspect the DOM and events.

------------------------------------------------------------------------

# 📁 Project Structure

``` text
DOM TASK MANAGER/
│
├── task.html
├── task.css
├── task.js
├── README.md
│
├── fonts/
│
└── assets/
```

------------------------------------------------------------------------

# 🎯 Learning Objective

The main goal of this project is to understand how a browser processes a
webpage and how JavaScript interacts with the DOM.

The project connects theoretical concepts such as:

-   Parsing
-   Tokenization
-   DOM
-   CSSOM
-   Render Tree
-   Event Bubbling
-   Event Capturing
-   Event Delegation
-   Browser Rendering

with practical JavaScript functionality.
