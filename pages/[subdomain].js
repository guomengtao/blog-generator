// pages/[subdomain].js
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;  // 获取请求的 host（包括子域名）
  const subdomain = host.split('.')[0]; // 提取子域名部分

  // 可以根据子域名做不同的处理，比如获取数据库内容、定制化显示等
  return {
    props: {
      subdomain,
    },
  };
}

export default function SubdomainPage({ subdomain }) {
  return (
    <div>
      <h1>欢迎来到 {subdomain} 博客！</h1>
      <p>这是 {subdomain} 的个性化博客页面。</p>
    </div>
  );
}