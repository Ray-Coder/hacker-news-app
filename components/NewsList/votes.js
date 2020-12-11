import React , { useState} from "react"
import utilStyles from '../../styles/utils.module.css'


const Votes = () => {

    const [count, setCount] = useState(0);
    return(
        <span className={`${utilStyles.padding4px}`}>
             <button className={`${utilStyles.upvoteBtn} ${utilStyles.rank} ${utilStyles.padding4px}`} onClick={()=>setCount(count+1)}>
                 +
             </button>
             <span className={`${utilStyles.rank} ${utilStyles.padding4px}`}>{count}</span>
             <button className={`${utilStyles.upvoteBtn} ${utilStyles.rank} ${utilStyles.padding4px}`} onClick={()=>setCount(count-1)}>
                 -
             </button>
         </span>
    )
}

export default Votes