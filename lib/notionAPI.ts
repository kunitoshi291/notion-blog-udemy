import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_SECRET_TOKEN,

});
 // DBにある記事を取得するための処理
export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        page_size: 100,
    })

    const allPosts = posts.results;

    return allPosts;
}

// const getPageMetaData = (post) => {
//     return {
//         title: post.properties.Name.title[0].plain_text,
//     }
// }
