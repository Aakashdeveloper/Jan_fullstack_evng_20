const url = 'http://localhost:8900'

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
        .then(response => response.json())
    
    return{
        type:'GET_LATEST',
        payload:output
    }
}


export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
        .then(response => response.json())
    
    return{
        type:'GET_ARTICLE',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${url}/galleries?_limit=2`,{method:'GET'})
        .then(response => response.json())
    
    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,{method:'GET'})
        .then(response => response.json())
    
    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}


export function clearSelectNews(){
    
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}

export function handleHits(array, id){
    const output = fetch(`${url}/articles/${id}`,
                {method:'PATCH',
                headers:{
                    'Accept':'applicatiion/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({likes:array})
            })
        .then(response => response.json())
    
    return{
        type:'HANDLE_HITS',
        payload:output
    }
}


export function PostDate(title,body,category){
    var random = Math.floor(Math.random()*1000)
    var data = {
        "id": random,
        "title": title,
        "body": body,
        "category": category,
        "img": "3.jpg",
        "date": "21/21/1944",
        "author": "Aston Kutcher",
        "views": 678,
        "likes": [
        358,
        102
        ]
    }


    fetch(`${url}/articles/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    .then((res) => res.json())


    return{
        type:'POST_FORM',
        payload:''
    }
}