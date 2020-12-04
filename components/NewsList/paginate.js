import React from "react"
import { useRouter } from "next/router"
import ReactPaginate from "react-paginate"
import paginationStyles from './paginate.module.css'

const PaginationBox = ({ allPostsData }) => {
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
    export default PaginationBox