import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumlist}) => {
        if(albumlist){
            return albumlist.map((item,index) => {
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return(
        <div className="album_list">
           {showList(props)}
        </div>
    )
}

export default AlbumList;