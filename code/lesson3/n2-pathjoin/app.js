const path = require("path");

const url = "https://domain.com/images/";
const relativePath = "kitties/the_cat1.jpg";

const fullPath = path.join(url, relativePath);

console.log(fullPath);
