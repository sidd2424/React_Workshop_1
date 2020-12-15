import React, { useState , useEffect} from 'react'
import './Filter.css'
import cards from './data'
import { useHistory, useLocation } from 'react-router-dom'
import withLogin from './withLogin'
import { connect } from 'react-redux'

  
 function Card(props){
    const [filter, setFilter]= useState('all')
    const [cardData, setCardData ] = useState([]);

    // useEffect(() => {
    //     // fetch('/data.json').then((response)=>response.json()).then((data)=>console.log(data))
    //     fetch('/data.json').then((response)=>response.json()).then((data)=>setCardData(data))
    //     // return () => {
    //     // console.log(card.id)
    //     // }
    // }, [])

    const history = useHistory();
    const location = useLocation();
    
    // useEffect(() => {
    //     // fetch('/data.json').then((response)=>response.json()).then((data)=>setCardData(data))
    //     return () => {
    //     console.log(values)
    //     }
    // }, [])

    let data=props.cardsarray;

    let urlPattern = location.search ? location.search.split('=')[1]:'all';

    const handleFilterChange=({target})=>{
        setFilter(target.value);
        history.push(`/?filter=${target.value}`)
    }
    const getFilteredData=(data,filter)=>{
        if(filter==='all')
        {
            return data
        }
        return data.filter((item)=> item.type===filter)
    }

    let filteredData= getFilteredData(data, urlPattern)
    
    let handleSearchText = ({ target })=>{
        setCardData(target.value)
    }

    let getSearchedArray =(text)=>{
        let searchedData=[];

        filteredData.filter((item)=>{
            if( item.content.toLowerCase().includes(text) ||
                (item.content.includes(text) && item.type === "text"))
            {
                searchedData.push(item);
            }
        });
        return searchedData;
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault()
    };
    
    let searchResult = getSearchedArray(cardData);
    console.log(searchResult)

    if (searchResult !== []){
        filteredData = searchResult
    }

         return ( 
            <>
                 {/* <h1>{JSON.stringify(cardData.id)}</h1> */}
                 <div>
                    <label>Filter : </label>
                    <select name='filter'id='filter' value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                       <option value="text">Text</option>
                       <option value="image">Image</option>
                    </select>
                    </div>

                    <div>
                        <label>Search Text : </label>
                        <input type='text' value={cardData} onChange={handleSearchText} />
                    </div>
                    <div className='main'>
                {filteredData.map(data => (
                    // {cardData.map(data => (
                
                    <form onSubmit={handleFormSubmit}>
                        
                    <div class="card">
                    {data.type==='image' 
                    ? <img src={data.content} alt="Avatar" style={{width:'50%'}} /> 
                    : <p>{data.content}</p>}          
                    <div class="container">
                    {data.user.image != null 
                    ? <img src={data.user.image} alt="Avatar" style={{width:'90%'},{borderRadius:'5px'}} />
                    : <img src="/logo1.png" alt="Avatar" style={{height:'40px'}} />}
                    
                    <p>{data.user.id}</p>
                    <h4><b>{data.user.name}</b></h4>
                  </div>
                  </div>
                    </form>
            ))}
            </div>
         </>
         )
}
 
 export default withLogin(Card);
//  const mapStateToProps = (state) => {   
//     return {
//         filter: state.filter,
//     };
// };

// export default connect(mapStateToProps)(Card);