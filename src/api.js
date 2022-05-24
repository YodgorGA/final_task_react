const axios = require('axios');

const request = async (url,method,body) =>{
    const response = await axios({
        url: `http://93.95.97.34/api/${url}`,
        method: method,
        data: body
      });
    return await response;
}


export const getTasks =  async() =>{
    return await request('tasks','post',{filter:{},page:0,limit:7});
}

export const getUsers = async ()=>{
    return await request('users/all','get');
}

export const getFilteredTasks = async (filterParams,page,limit)=>{
    return await request('tasks','post',{filter:filterParams,page,limit});
}
// module.exports  = {getTasks};
// const request = async (url,method,...body) =>{
//     let jsonBody = JSON.stringify(body)
//     const response = await axios.method(url,jsonBody);
//     data = response;
// }

// const getdata = () =>{
//     request(`${url}tasks`,'post',{filter:{},page:1,limit:1}).then(response=>{console.log(response)});
// }

// getdata();

// const getTasks = (response) =>{

// };

// const request = async () => {
//     const response = axios.post(`${url}tasks`,
//         {
//         "filter": {},
//         "page": 1,
//         "limit": 1
//         });

//         return response;
    
// }
// request().then(resp=>{console.log(resp.data)});
// console.log(request());


// const request = async (url, method = 'GET', body) => {
//     const response = await fetch(url, {
//       method,
//       body: JSON.stringify(body),
//       headers: new Headers({
//         'Content-type': 'application/json'
//       })
//     });
  
//     return await response.json();
//   }