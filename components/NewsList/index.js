import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const NewsList = ({ allPostsData }) => {
    const [users, setUsers] = useState([])
    const router = useRouter()
    useEffect(() => {
      if (allPostsData) {
        
          setUsers(allPostsData.page)
      }
    }, [allPostsData])
    // Triggers fetch for new page
    const handlePagination = page => {
      const path = router.pathname
      const query = router.query
      query.page = page.selected + 1
    //   router.push({
    //     pathname: path,
    //     query: query,
    //   })
    }
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
          />
        </>
      )
    }
    export default NewsList