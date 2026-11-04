# DEVELOPMENT LOG OF GRINDSTATS

## I will attempt to make this dev log more in-depth than the last project as this one is vastly more complex and will probably take multiple months

## 18/10/26

### Problem

Pressing the HTML button did nothing despite some JavaScript code

### Solution

Moved the JavaScript identifier line to the bottom of the body so it wasn't trying to utilise JavaScript before it was defined

### Additions to the app

Added a html file that displays text to the screen styled by css

### Currently working on

Learning DOM manipulation

Working on a homepage

### What to do next

Learn JavaScript (I'm a complete beginner to this language)

Create the basic dashboard layout

Add support for manually entering match results

Calculate statistics from saved match data

Add signup/login and basic authentication

### What I learned today

How HTML, CSS and JavaScript interact together to form structure, style and presentation

How HTML and CSS syntax works



## 20/10/26

### Problem

Changing a button's tag from "button" to "a" altered it's appearance unexpectedly

### Solution

Altered the CSS properties of the button accordingly

### Additions to the app

Added a sign up screen that is completely empty

### Currently working on

Learning DOM manipulation

Working on a sign up screen

### What to do next

Learn JavaScript (I'm a complete beginner to this language)

Create the basic dashboard layout

Add support for manually entering match results

Calculate statistics from saved match data

Add signup/login and basic authentication



## 26/10/26

### Additions to the app

Finished sign up screen appearance

Created an empty MySQL database using MySQL Workbench

### What to do next

Integrate JavaScript and server-side logic into the sign up page

Create the basic dashboard layout

Add support for manually entering match results

Calculate statistics from saved match data

Finish signup/login and basic authentication

### Currently working on

Researching databases and how to make a backend

Working on a sign up screen

## 3/11/26

### Notable experience

Almost commited my MySQL password to GitHub

### Problem(s)

JavaScript wasn't sending my information to Flask because of a "CORS error"

Despite fixing the CORS error something was still breaking it

### Solution(s)

Defined "CORS(app)" far earlier in the script so it would be read earlier

Replaced the "." in my URL with a "/"

### Additions to the app

Added a virtual environment

Started a backend using python (with flask) that can communicate to my JavaScript username detection script (this took around 5 hours to get working)

### What to do next

Create the basic dashboard layout

Add support for manually entering match results

Calculate statistics from saved match data

Finish signup/login and basic authentication

### Currently working on

Making a backend

Learning SQL

Finding out who Json is

## 4/11/26

### Problem

Username data wasn't being sent to the MySQL database

### Solution

I actually defined the "user_exists" boolean properly 💔

### Additions to the app

Username data now saves and the app will reject already taken username submissions

Frontend interprets any error messages on the signup and JavaScript displays it using a HTML paragraph

### What to do next

Create the basic dashboard layout

Add support for manually entering match results

Calculate statistics from saved match data