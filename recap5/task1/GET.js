'use script';

async function getAPI() {
    const response = await fetch('https://reqres.in/api/users/1');
    const json = await response.json();
    console.log(json);
}

getAPI();