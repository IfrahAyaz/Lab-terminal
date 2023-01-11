const fetch = require("node-fetch");
fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(console.log);
fetch('https://dummyjson.com/posts/1')
.then(res => res.json())
.then(console.log);
fetch('https://dummyjson.com/posts?limit=10&skip=10')
.then(res => res.json())
.then(console.log);
