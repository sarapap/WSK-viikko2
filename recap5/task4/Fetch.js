'use script';

async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Failed to fetch data.');

        const userData = await response.json();
        console.log(userData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
}

(async () => {
    try {
        const user = {
            name: 'Sara',
            job: 'Software Engineering'
         };
        const url = 'https://reqres.in/api/users';
        const options = {
           method: 'POST',
           headers: {
              'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
        }; await fetchData(url, options);
    } catch (error) {
        console.log('An error occurred:', error);
    }
})();
