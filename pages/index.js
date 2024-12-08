import { useState } from 'react';

export default function Home() {
  const [blogName, setBlogName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setBlogName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Here you can call an API or logic to create the subdomain
    alert(`Blog name is: ${blogName}`);
  };

  return (
    <div>
      <h1>Welcome to My Blog Generator!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blog-name">Enter your blog name:</label>
        <input
          type="text"
          id="blog-name"
          value={blogName}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Generate Blog</button>
      </form>

      {submitted && <p>Your blog subdomain will be: {blogName}.blog-generator.pearl.vercel.app</p>}
    </div>
  );
}