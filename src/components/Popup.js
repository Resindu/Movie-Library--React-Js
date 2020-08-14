import React from 'react'

const Popup = ({selected,closepopup}) => {
    return (
        <div className="popup">
            <div className="popupcontent">
            <div className="ratingbutton">   
                <h2 className="moviepopuptitle" >{selected.Title}<span>({selected.Year})</span></h2>
                             </div>

                <p className="rating">Rating :{selected.imdbRating}</p>
                <button className="closebtn" onClick={closepopup}>Close</button>


                

                <img src={selected.Poster}/>
                <div className="popuptexts">

                    <p className="movietype">{selected.Type}</p>
                    <p>{selected.Plot}</p><br></br>
                    <p> Starring : {selected.Actors}</p>
                    <p>Directed by : {selected.Director}</p>
                    <p>Genres : {selected.Genre}</p>


                </div>
               

            </div>
           
            
        </div>
    )
}

export default Popup;
