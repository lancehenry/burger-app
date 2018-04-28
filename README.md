# burger-app

This is a full-stack application that's built using Node.js, Express, Handlebars, Bootstrap, a self-created ORM, and uses a MySql database.

The user enters any burger and adds it to the menu list. This also adds the burger entry to the MySQL database. The user can then eat any burger on the left side of the DOM under the 'Eat 'Em' column which moves it into the right column as 'Devoured 'Em'. This also updates the burgers status in the database.

# Table of Contents

<!--ts-->
* [Table of Contents](#table-of-contents)
* [Philosophy](#philosophy)
* [Struggles](#struggles)
  <!--te-->

Philosophy
==========
Using the app:

* Enter the burger you'd like to add.
* After submitting, this adds the burger to the left side column on the DOM and adds to the MySQL database.
* Enter another burger you'd to add, or eat the current burger already in the left column. Add as many as you'd like.
* After hitting 'Eat', it will be moved to the right column as 'devoured'. This also updates the burgers in the database.

Struggles
=========
Some of the challenges I encountered:

* getting the routes to work correctly
* overall file structure organization and syntax
* using Handlebars as a view/template generator
* getting the queries to work correctly for data

