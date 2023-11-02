const backendurl = "http://localhost:8000/api/";

export default backendurl;


export async function POSTU(url, file){

    let data = new FormData();
    data.append('file', file);

    return await fetch(backendurl + url, {
        method:'POST',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || ''
        },
        body: data
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}



export async function POST(url, request){
    
    return await fetch(backendurl + url, {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || ''
        },
        body: JSON.stringify(request)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}


export async function GET(url, request = null){

    let uri = "";
    if(request){
        uri = '?' + new URLSearchParams(request).toString();
    }

    return await fetch(backendurl + url + uri, {
        method:'GET',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

export async function PATCH(url, request){

    return await fetch(backendurl + url, {
        method:'PATCH',
        mode:'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || '',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(request)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

export async function DELETE(url, request){

    let uri = "";
    if(request){
        uri = '?' + new URLSearchParams(request).toString();
    }

    return await fetch(backendurl + url + uri, {
        method:'DELETE',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}