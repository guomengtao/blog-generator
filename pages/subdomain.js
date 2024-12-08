// pages/subdomain.js

export default function SubdomainPage({ subdomain }) {
    return (
      <div>
        <h1>欢迎来到 {subdomain} 的博客！</h1>
        <p>这是你刚刚输入的子域名页面。</p>
      </div>
    )
  }
  
  export async function getServerSideProps({ req }) {
    // 获取请求中的主机名（例如：tom-english-blog.blog.rinuo.com）
    const hostname = req.headers.host || '';
    
    // 从主机名中提取子域名（例如：tom-english-blog）
    const subdomain = hostname.split('.')[0]; // 获取子域名部分
    
    // 如果没有子域名或是默认的 www 子域名，返回 404 错误
    if (!subdomain || subdomain === 'www') {
      return {
        notFound: true,
      };
    }
  
    // 返回子域名作为页面的 props
    return {
      props: {
        subdomain,
      },
    };
  }