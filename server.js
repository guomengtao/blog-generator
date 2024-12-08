const express = require('express');
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for the homepage
app.get('/', (req, res) => {
    res.send(`
        <form action="/create-blog" method="POST">
            <label>Enter Blog Name:</label>
            <input type="text" name="blogName" required />
            <button type="submit">Create Blog</button>
        </form>
    `);
});

// Route to handle blog creation
app.post('/create-blog', (req, res) => {
    const blogName = req.body.blogName;
    res.send(`
        <h1>Blog Created!</h1>
        <p>Your blog URL: <a href="https://${blogName}.blog.rinuo.com" target="_blank">${blogName}.blog.rinuo.com</a></p>
    `);
});

// Handle subdomains
app.get('*', (req, res) => {
    const host = req.headers.host; // e.g., "tom-english-blog.blog.rinuo.com"
    const subdomain = host.split('.')[0];

    if (subdomain !== 'blog') {
        res.send(`<h1>Welcome to ${subdomain}!!!</h1>`);
    } else {
        res.send('<h1>Welcome to blog.rinuo.com!</h1>');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});