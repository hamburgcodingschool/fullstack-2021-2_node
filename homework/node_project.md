# Blog
> Using Node, Express, EJS and MySQL create a server-side rendered website that allows to add records to a database and visualize the data. 

## Sitemap
```
/
/authors
/posts
/new_author
/new_post
/author?id=<number>
/post?id=<number>
```

## General
### Features that are available on all pages
- Header
	- Logo
	- Menu with link to all pages
- Footer
	- Copyright
	- etc…

## Features
### / (Homepage)
- List of 5 latest posts
	- Each post displays:
		- the date of the blog post
		- the title and a bit of text
		- Read more link (links to full post at `/post?id=<number>`
		- Author name (links to author page at `/author?id=<number>`
	
### /authors
- List of all authors sorted alphabetically
	- Each item displays:
		- Author name (links to author page at `/author?id=<number>`
		- Author picture if Bonus goals are implemented

### /posts
- List of all posts sorted by date newest to oldest
	- Each post displays:
		- the date of the blog post
		- the title and a bit of text
		- Read more link (links to full post at `/post?id=<number>`
		- Author name (links to author page at `/author?id=<number>`

### /new_author
- Form that allows to add a new author to the database
	- Fields:
		- Name `<input type="text">`
		- Description `<textarea>`
		- Avatar (Bonus) `<select>`
		- Picture (Bonus) `<input type=“file”>`

### /new_post
- Form that allows to add a new post to the database
	- Fields:
		- Author `<select>`
		- Title `<input type="text">`
		- Description `<textarea>`
		- Picture (Bonus) `<input type=“file”>`
	- Timestamp should be automatic based on server date time

### /author?id={number}
- Shows all the fields for a specific author

### /post?id={number}
* Shows all the fields (including full text) for a specific blogpost

## Bonus features
- Author picture can be an Avatar from a predetermined list
- Upload images (author picture, blog post pictures)
- Delete author
- Delete post
- Edit author
- Edit post
