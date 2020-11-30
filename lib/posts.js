// import fetch from "node-fetch";

// export const getServerSideProps = async ({ query }) => {
//   const page = query.page || 1
//   const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story,front_page&page=${page}`)
//   const posts = await res.json();
//   const allPostsData = {
//     nbPages: posts.nbPages,
//     page: posts.page
//   }
//   const test = posts.hits.map(post => {
//     return {
//         id: post.story_id,
//         url: post.url,
//         title: post.title
//     }
//   })
//   allPostsData.param = test
//   // Pass data to the page via props
//   return { props: { allPostsData } }
//  // return resultData
// }
