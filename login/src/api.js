export const consultAPI = (url, data) => {
    return fetch(url, {
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(res => {
        if(res.status !== 200) {
            return { request:false, message:"hubo un error en el servidor. F" }
        }
        return res.json().then(data => {
            return ({ 
                request:true, 
                message:data.message, 
                data:data.hasOwnProperty('rows') && data.rows[0]
            })
        })
    })
    .catch(err => {
        console.log(err);
    })
}