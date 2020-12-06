import utilStyles from '../../styles/utils.module.css'

class Upvote extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            hasUpvoted: false,
        }
    }
 
    increment = () => {
 
      this.setState({
          count: this.state.count + 1,
          hasVoted: true
      })
    }
 
    decrement = () => {
 
       this.setState({
         count: this.state.count - 1
       })
    }
 
    render() {
      return (
         <span className={`${utilStyles.padding4px}`}>
             <button className={`${utilStyles.upvoteBtn} ${utilStyles.rank} ${utilStyles.padding4px}`} onClick={ this.state.hasVoted ? this.decrement: this.increment}>
                 +
             </button>
             <span className={`${utilStyles.rank} ${utilStyles.padding4px}`}>{this.state.count}</span>
             <button className={`${utilStyles.upvoteBtn} ${utilStyles.rank} ${utilStyles.padding4px}`} onClick={this.decrement}>
                 -
             </button>
         </span>
     );
   }
 }
 
 export default Upvote;