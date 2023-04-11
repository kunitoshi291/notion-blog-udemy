/* eslint-disable react/jsx-key */
import Head from 'next/head';
import { getAllPosts } from '../lib/notionAPI';
import SinglePost from '../components/post/SinglePost';

export const getStaticProps = async () => {
  const allPosts = await getAllPosts(); // notionAPI.tsのgetAllPosts関数を呼び出す

  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 60 * 24, // ISRでビルド。24時間ごとに再更新する
  };
};

export default function Home({allPosts}) {
  console.log(allPosts);
  return (
    <div className='container h-full w-full mx-auto'>
      <Head>
        <title>My Notion-Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container w-full mt-16'>
        <h1 className='text-5xl font-medium text-center mb-16'>
          My Notion Blog 🚀
          </h1>
          {allPosts.map((post) => (
            <div className='mx-4'>
             <SinglePost
              title = {post.title}
              description = {post.description}
              date = {post.date}
              tags = {post.tags}
              slug = {post.slug}

             />
            </div>
          ))}
      </main>
    </div>
  )
}
