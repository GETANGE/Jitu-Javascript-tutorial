const product = async function () {
    const url = "https://mpbf9a42b8be939afd3c.free.beeceptor.com/api/products";

    try {
        const result = await fetch(url);
        
        // Check if the request was successful
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        
        const data = await result.json();
        console.log(data); // Logs the actual data from the response
    } catch (error) {
        console.error('Error fetching data:', error); // Logs any errors that occur
    }
};

product(); 