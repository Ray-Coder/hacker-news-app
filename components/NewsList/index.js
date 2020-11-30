import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import paginationStyles from './paginate.module.css'
import LineRechartComponent from "../line.rechart"

const NewsList = ({ allPostsData }) => {
    const router = useRouter()

    // Triggers fetch for new page
    const handlePagination = data => {
        const path = router.pathname
        const query = router.query
        query.page = data.selected + 1
        router.push({
            pathname: path,
            query: query,
        })
    }
    const plot = allPostsData.param.map(data => {
        return {
            points: data.points,
            story: data.story
        }
      })
    return (
        <>
          <ul className={utilStyles.list}>
          {allPostsData.param.map(({ id, url, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`${url}`}>
              <a>{title.replace(/<[^>]+>/g, '')}</a>
            </Link>
            
            </li>
          ))}
          </ul>
          <ReactPaginate
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            initialPage={allPostsData.page - 1}
            pageCount={allPostsData.nbPages}
            onPageChange={handlePagination}
            containerClassName={paginationStyles.paginateWrap}
            pageClassName={paginationStyles.paginateLi}
            pageLinkClassName={paginationStyles.paginateA}
            activeClassName={paginationStyles.paginateActive}
            nextLinkClassName={paginationStyles.paginateNextA}
            previousLinkClassName={paginationStyles.paginatePrevA}
            breakLinkClassName={paginationStyles.paginateBreakA}
          />
           <LineRechartComponent plot={plot}/>
        </>
      )
    }
    export default NewsList