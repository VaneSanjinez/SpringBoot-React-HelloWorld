const url = 'http://localhost:9000';

const headers = {
  'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
};

export const getJson = () => {
    return fetch(`${url}/home/hello`, {headers})
        .then(res => {
             return res.json()
        })
        .then(data => {
            console.log(data);
            return data.message;

        });
};