// const product = async function () {
//     const url = "https://run.mocky.io/v3/e25faeb2-9e88-4874-88fe-3d4a7eec79ca"
//     try {
//         const result = await fetch(url);
        
//         // Check if the request was successful
//         if (!result.ok) {
//             throw new Error(`HTTP error! status: ${result.status}`);
//         }
        
//         const data = await result.json();
//         console.log(data); // Logs the actual data from the response
//     } catch (error) {
//         console.error('Error fetching data:', error); // Logs any errors that occur
//     }
// };

// product(); 

let url = "https://run.mocky.io/v3/aae3903b-64bf-4285-920d-0be7f5345e76"

const product = async function (data){
    let result = await fetch(data)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));

    console.log(result);
}
product(url)