'use script';

async function getAPI() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23');
        if (!response.ok) throw new Error('Failed to fetch data.');
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log('Error getting data', e);
    }
}

async function postAPI() {
    const url = 'https://reqres.in/api/unknown/23';
    const data = {
        first_name: 'Sara',
        job: 'Software Engineering'
      };
      try {
        const response = await fetch(url,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to fetch data.');
    
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error('Error posting data:', error);
      }
}

async function putDATA() {
    const url = 'https://reqres.in/api/unknown/23';
    const data = {
        first_name: 'Sara',
        job: 'Software Engineering'
      };
      try {
        const response = await fetch(url,  {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to fetch data.');
    
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error('Error putting data:', error);
      }
}

async function deleteDATA() {
    const url = 'https://reqres.in/api/unknown/23';
      try {
        const response = await fetch(url,  {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to fetch data.');
    
        console.log('Data deleted successfully.');
      } catch (error) {
        console.error('Error deleting data:', error);
      }
}


getAPI();
postAPI();
putDATA();
deleteDATA();
