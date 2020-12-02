import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import paginationStyles from './paginate.module.css'

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
    return (
        <>
          <ul className={utilStyles.list}>
          {allPostsData.param.map(({ id, url, title }, index) => (
            <li className={utilStyles.listItem} key={index}>
            <span className={`${utilStyles.rank} ${utilStyles.padding4px}`}>{index+1}.</span>

            <Link href={`${url}`}>
              <a className={utilStyles.aTag}>{title.replace(/<[^>]+>/g, '')}</a>
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
           
        </>
      )
    }
    export default NewsList