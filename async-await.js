// async function hello(name){
//     return 'Hello ' + name
// }
// const  sayHellow = hello("shakil")
// console.log(sayHellow);
// sayHellow.then(res => console.log(res));


async function DataLoad(){
    const FetchUrl = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await FetchUrl.json();
    return data
    // displayData(data)
}
DataLoad().then( data => {
    displayData(data);
});

// async function loadData(){
//     const Url = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await Url.json();
//     console.log(data);;
// }
// loadData()

// function ladaLoad(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         displayData(data)
//     })
// }

function displayData(data){
    const ul = document.getElementById("unList");
    for (let i = 0; i < data.length; i++) {
        const persona = data[i];
        
       const item = document.createElement('li');
       item.innerText = persona.name;
       ul.appendChild(item);

    }
}