# Create a Website with Server Side Rendering
* Create a website consisting of 3 pages
	* Homepage -> `/`
	* About -> `/about`
	* Gallery -> `/gallery`
	* Contact Us -> `/contact`

## General

1. All pages should have some css styling coming from an **external css file**

## Header

2. Make sure that all pages have a top navigation menu that allow you to navigate freely between them.
3. The header should have an `img` logo

## Content 
### Homepage

4. Add some content at will to the homepage

### About

5. Add some content at will to the about page

### Gallery

6. The gallery should contain a list of images based on a url query parameter named `type`

> Example:<br>
> `?type=dogs` should display images of dogs<br>
> `?type=cats` should display images of cats<br>
> `?type=all` should display all the images<br>

7. The absence of the `type` parameter should produce a message instead of a list of images

### Contact Us

8. The contact page consists of a form with the following fields `name`, `email`, `subject`, `description`
9. All contact information should be submitted via `POST` method
10. After receiving the contact information the server should validate if all fields are present and show either a `thank you for your contact` message or a `invalid contact` message
11. The contact data itself would then go to a database, but that's for another exercise.