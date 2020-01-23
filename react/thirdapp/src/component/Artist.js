import React from 'react';
import { Link } from 'react-router-dom';

const Artist = (props) => {

    const renderlist = ({artistData}) => {
        if(artistData){
            return artistData.map((item,index) => {

                const mystyle = {
                    background:`url('/images/covers/${item.cover}.jpg')`
                }
                
                return(
                    <Link key={index} to="" className="artist_item"
                    style={mystyle}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>List of Artist</h4>
            {renderlist(props)}
        </div>
    )
}

export default Artist;