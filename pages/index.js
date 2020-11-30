import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import NewsList from "../components/NewsList"

export async function getStaticProps() {
  const query = {page: 1}
  const allPostsData = await getSortedPostsData({query})
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here's your news updates</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <NewsList allPostsData={allPostsData} />
      </section>
    </Layout>
  )
}