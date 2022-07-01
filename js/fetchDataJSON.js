const api_url ="https://jsonplaceholder.typicode.com/users";

function getApiData(URL){
    // setTimeout(() => {
        fetch(URL)
        .then((res)=> {
            return res.json() 
        })
        .then ((data)=> displayData(data))
        .catch((error)=> console.log(error.message));
    // }, 3000);
}

function displayData(APIDATA){
    console.log(APIDATA);
    for(let user of APIDATA){
        let tr=document.createElement('tr');

        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        let td5=document.createElement('td');

        td1.innerText=`${user.id}`;
        td2.innerText=`${user.name}`;
        td3.innerText=`${user.email}`;
        td4.innerText=`${user.phone}`;
        td5.innerText=`${user.address.city}`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        document.getElementById("mytable").appendChild(tr);

    }
}

getApiData(api_url);


//     promise (future value)
//     /      \       \
// fullfill reject pending
// /         \         |
// |          |--------|
// |-------------------|
// Asynchronous Programming
// JavaScript is synchronous programming