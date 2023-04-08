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

    return allPosts.map((post) => {
        // return post;
        return getPageMetaData(post);
    });
}

const getPageMetaData = (post) => {
    // tagを取得するために、map関数を使う
    const getTags = (tags) => {
        const allTags = tags.map((tag) => {
            return tag.name;
        });
        return allTags;
    };

    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        description: post.properties.Description.rich_text[0].plain_text,
        date: post.properties.Date.date.start,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.タグ.multi_select),
    };
};
