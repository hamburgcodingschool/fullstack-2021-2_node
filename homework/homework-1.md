# Create a Website with Server Side Rendering
* Create a website consisting of 2 template views
	* Homepage -> `/`
	* Blog Post -> `/blogpost`

## General

1. All blog data should come from an array of objects in the following format:
```
[
    {
        "title": "plain text",
        "content": "html markup"
    },
    {
        "title": "my first blog post",
        "content": "<p>something something</p><p>some more content</p>"
    },
    ...
]
```

## Content 
### Homepage

2. The homepage should display a list of links with each one linking to the blogpost page but with different url parameters. The list should by dynamically created based on the array.
> Example:<br>
> `<a href="/blogpost?pos=1">my first blog post</a>`

### Blog Post

3. In this page we show the content based on the passed query parameter

4. The absence of the `pos` parameter or an invalid number should produce an error message instead of the blog post
