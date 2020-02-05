import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews = (props) => {

    const latestRender =({latdata}) => {
        if(latdata){
            return latdata.map((data) => {
                return(
                    <Link to="/" className="item">
                        <div className="image_cover"
                        style={{background:`url(/images/articles/${data.img})`}}>
                            <div className="description">
                                <span>{data.category}</span>
                                <div>{data.title}</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="home-latest">
            {latestRender(props)}
        </div>
    )
}


export default LatestNews