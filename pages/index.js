import Head from 'next/head'
import fetch from "node-fetch";

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import PaginationBox from "../components/NewsList/paginate"
import NewsList from "../components/NewsList/index"

import LineRechartComponent from "../components/line.rechart"

const HomePage = ({ allPostsData }) => {
  const plot = allPostsData.param.map(data => {
    return {
        points: data.points,
        story: data.story
    }
  })
  return (
    <Layout  data-testid="main-component">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div aria-label="Hacker News" className={`${utilStyles.headingLg} ${utilStyles.padding4px}`}>Hacker News</div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding4px}`}>
        <NewsList allPostsData={allPostsData} />
      </section>
      <PaginationBox allPostsData={allPostsData} />
      <LineRechartComponent plot={plot}/>

    </Layout>
  )
}


export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
  const posts = await res.json();

  const allPostsData = {
    nbPages: posts.nbPages,
    page: posts.page
  }
  const test = posts.hits.map(post => {
    return {
        id: post.story_id,
        url: post.url,
        title: post.title,
        points: post.points,
        story: post.objectID
    }
  })
  allPostsData.param = test
  return { props: { allPostsData } }
}
export default HomePage