import fetch from "node-fetch";

export async function getSortedPostsData({query}) {
  const page = query.page || 1
  const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story,front_page&page=${page}`)
  const posts = await res.json();
  const resultData = {
    nbPages: posts.nbPages,
    page: posts.page
  }
  const test = posts.hits.map(post => {
    return {
        id: post.story_id,
        url: post.url,
        title: post.title
    }
  })
  resultData.param = test
  return resultData
}
