// Function to fetch data based on selected option
function fetchData() {
    const selectElement = document.getElementById('data-select');
    const selectedValue = selectElement.value;
    let apiUrl = `https://isro.vercel.app/api/${selectedValue}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Update webpage content with the fetched data
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = '';
            
            // Spacecrafts Datas
            if (selectedValue === 'spacecrafts') 
            {
                if (!data.spacecrafts || !Array.isArray(data.spacecrafts))
                {
                    throw new Error('Invalid spacecrafts data');
                }
                data.spacecrafts.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card'); //Bootstrap Card

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');

                    // space craft ID
                    const id = document.createElement('p');
                    id.classList.add('spacecraft-content');
                    id.textContent = `ID: ${item.id}`;

                    // space craft Name
                    const sapceCraftName = document.createElement('p');
                    sapceCraftName.classList.add('spacecraft-content');
                    sapceCraftName.textContent = `Spacecraft Name: ${item.name}`;

                    // Appending the space craft ID and Name to html
                    cardContent.appendChild(id);
                    cardContent.appendChild(sapceCraftName);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            // Customer Satelites datas
            else if (selectedValue === 'customer_satellites') 
            {
                if (!data.customer_satellites || !Array.isArray(data.customer_satellites)) 
                {
                    throw new Error('Invalid customer satellites data');
                }
                data.customer_satellites.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card'); //Bootstrap Card

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');

                    // Customer Satelite ID
                    const id = document.createElement('p');
                    id.classList.add('satellite-content');
                    id.textContent = `ID: ${item.id}`;

                    // Customer Satelite's Country
                    const country = document.createElement('p');
                    country.classList.add('satellite-content');
                    country.textContent = `Country: ${item.country}`;

                    // Customer Satelite Launch Date
                    const launchDate = document.createElement('p');
                    launchDate.classList.add('satellite-content');
                    launchDate.textContent = `Launch Date: ${item.launch_date}`;

                    // Customer Satelite Mass
                    const mass = document.createElement('p');
                    mass.classList.add('satellite-content');
                    mass.textContent = `Mass: ${item.mass}`;

                    // Customer Satelite Launcher
                    const launcher = document.createElement('p');
                    launcher.classList.add('satellite-content');
                    launcher.textContent = `Launcher: ${item.launcher}`;

                    // Appending datas to html
                    cardContent.appendChild(id);
                    cardContent.appendChild(country);
                    cardContent.appendChild(launchDate);
                    cardContent.appendChild(mass);
                    cardContent.appendChild(launcher);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            // Launchers Datas
            else if (selectedValue === 'launchers') 
            {
                if (!data.launchers || !Array.isArray(data.launchers)) 
                {
                    throw new Error('Invalid launchers data');
                }
                data.launchers.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card'); //Bootstrap Card

                    // Launcher's ID
                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    const title = document.createElement('div');
                    title.textContent = `Launcher ID: ${item.id}`;

                    // Appending Launcher's ID to html
                    cardContent.appendChild(title);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            } 
            // Centres datas
            else if (selectedValue === 'centres') 
            {
                if (!data.centres || !Array.isArray(data.centres)) 
                {
                    throw new Error('Invalid centres data');
                }
                data.centres.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add('card'); //Bootstrap Card

                    const cardContent = document.createElement('div');
                    cardContent.classList.add('card-content');
                    
                    // Centre's ID
                    const id = document.createElement('p');
                    id.classList.add('centres-content');
                    id.textContent = `ID: ${item.id}`;

                    // Centre's Name
                    const name = document.createElement('p');
                    name.classList.add('centres-content');
                    name.textContent = `Name: ${item.name}`;

                    // Center's Place
                    const place = document.createElement('p');
                    place.classList.add('centres-content');
                    place.textContent = `Place: ${item.Place}`;
                    
                    // Centre's State
                    const state = document.createElement('p');
                    state.classList.add('centres-content');
                    state.textContent = `State: ${item.State}`;

                    // Appendind all centres datas to html
                    cardContent.appendChild(id);
                    cardContent.appendChild(name);
                    cardContent.appendChild(place);
                    cardContent.appendChild(state);
                    card.appendChild(cardContent);
                    dataContainer.appendChild(card);
                });
            }
        })
        .catch(error => { // Response Error Handler
            console.error('There was a problem fetching the data:', error);
        });
}

// Call the fetchData function when the page loads initially
document.addEventListener('DOMContentLoaded', fetchData);

// Add event listener to select element
document.getElementById('data-select').addEventListener('change', fetchData);