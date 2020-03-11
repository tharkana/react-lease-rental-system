

const API_BASE_ADDRESS = 'https://hiring-task-api.herokuapp.com/v1';

const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default class Api {
    static async getCurrentLeaseList() {
        const uri = API_BASE_ADDRESS + "/leases";
        // const response = await fetch(uri, {
        //     method: 'GET',
        //     headers : jsonHeaders
        // });

        // console.log(JSON.stringify(response));
        // return response.json();

        return fetch(uri, {
            method: 'GET',
            headers : jsonHeaders
        });
    }

    static async getLeaseDetail(id) {
        const uri = `${API_BASE_ADDRESS}/leases/${id}`;
        // const response = await fetch(uri, {
        //     method: 'GET',
        //     headers : jsonHeaders
        // });

        return fetch(uri, {
            method: 'GET',
            headers : jsonHeaders
        });
    }
}


// export async function getBooks() {
//     try {
//         const options = {
//             method: 'GET'
//         };
//         const response = await fetch(BASE_URL, options);

//         return response.json();
//     } catch (e) {
//         throw e;
//     }
// }