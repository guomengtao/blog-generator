// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [blogName, setBlogName] = useState('');
  const [subdomain, setSubdomain] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 构建子域名 URL
    const generatedSubdomain = `${blogName}-english-blog.blog.rinuo.com`;  // 你可以根据需要更改格式
    setSubdomain(generatedSubdomain);

    // 重定向到新的子域名
    window.location.href = `https://${generatedSubdomain}`;
  };

  return (
    <div>
      <h1>欢迎来到我的博客生成器！</h1>
      <p>请输入您的博客名称：</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          placeholder="博客名称"
          required
        />
        <button type="submit">生成博客</button>
      </form>
      {subdomain && (
        <p>您的博客子域名是：<a href={`https://${subdomain}`}>{subdomain}</a></p>
      )}
    </div>
  );
}