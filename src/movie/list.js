import Carte from "./card";

function List(props){
    return(
        <div> 
            {props.moviedata.map(el => <Carte  el={el}></Carte>)}
        </div>
    )
}
export default List