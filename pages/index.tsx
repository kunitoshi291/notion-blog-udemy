import Head from 'next/head';
import { getAllPosts } from '../lib/notionAPI';

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
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
