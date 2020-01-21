import React from 'react';

const NewsList = (props) => {
    console.log("Inside Newslist>>>", props)

    const output = props.newsData.map((data,index) => {
        return(
            <div key={index}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })


    return(
        <div>
           {output}
        </div>
    )
}

export default NewsList;