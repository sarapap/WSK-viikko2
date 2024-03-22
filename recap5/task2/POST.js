'use script';

async function postAPI() {
    const url = 'https://reqres.in/api/users';
    const data = {
        first_name: 'Sara',
        job: 'Software Engineering'
      };
    const response = await fetch(url,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();
    console.log(json);
}

postAPI();