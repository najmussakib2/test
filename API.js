//load API

const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then((res) => res.json())
    .then((data) => {
        
        // console.log(data);
        displayAllData(data.data.tools.slice(0, 6));
    });
};

//show data..

const displayAllData = (hubs) => {
    const container = document.getElementById("section_div");
    container.innerHTML = "";
    //default show data
    hubs.forEach((hub) => {
        // console.log(hub.published_in);
        
        const div = document.createElement('div');
            div.classList.add('col');
         div.innerHTML = `
         <div class="card w-100 h-100 rounded-lg">
                <figure><img src="${hub.image}" alt="Shoes" class="rounded-lg" style="Height: 200px"/></figure>
            <div class="card-body">
                    <h2 class="text-bold py-2">Features</h2>
                    <p>1. Natural language processing</p>
                    <p>2. Contextual understanding</p>
                    <p class=" pb-2">3. Text generation</p><hr>
                    <h2 class="fs-3 py-2">${hub.name}</h2>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <div>
                            <i class="fa-regular fa-calendar-days"></i>
                            </div>
                            <div class="ps-2">
                            <p>${hub.published_in}</p>
                            </div>
                        </div>
                    
                        
                        
                        <div class ="card-actions">
                        
                        <button onclick="Details('${hub.id}')">
                            <img src="arrow.jpg" alt="" class="rounded-full" style="Height: 50px; width: 50px"/>
                        </button>

                        
                        
                        </div>
            </div>
        </div>
        `;
        container.appendChild(div);

        spinner(false);

    });
    
};


// button----
const Details = (id) => {
   const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data))
        
}

const showAllDataTogether =() =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then((res) => res.json())
    .then((data) => {
        displayAllData(data.data.tools);

    });
    spinner(true);
}


function spinner(isLoading){
    const loaderSection = document.getElementById('spinner');
    if (isLoading){
        loaderSection.classList.remove('hidden')
    }else{
        loaderSection.classList.add('hidden')
    }
} 


loadAllData();
