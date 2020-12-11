import React, { useState } from "react"
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Votes from "./votes"
const NewsList = ({ allPostsData }) => {
    return (
        <>
          <ul className={utilStyles.list}>
          
          {allPostsData.param.map(({ id, url, title }, index) => (
            <li className={utilStyles.listItem} key={index}>
            <span aria-label={`Story ${index+1}`} className={`${utilStyles.rank} ${utilStyles.padding4px}`}>{index+1}.</span>

            <Link href={`${url}`}>
              <a aria-label={`${title.replace(/<[^>]+>/g, '')}`} className={utilStyles.aTag}>{title.replace(/<[^>]+>/g, '')}</a>
            </Link>
            <Votes />
            </li>
          ))}
          </ul>
        </>
      )
    }
    export default NewsList