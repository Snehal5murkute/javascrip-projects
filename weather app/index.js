    //  const userTab = document.querySelector("[data-user-weather]");
    //  const searchTab = document.querySelector("[data-search-weather]");
    //  const userContainer = document.querySelector(".weather-container");

    //  const grantAccess = document.querySelector(".grant-loction-container");
    //  const searchForm = document.querySelector("[data-searchform]");

    //  const loadingScreen = document.querySelector(".loading-container");
    //  const userInfoContainer = document.querySelector(".user-info-container");

    //  let currentTab  = userTab;
    //  const API_key = "5eda411b0f4dc51b6116a58fd6a262f5";
    //  currentTab.classList.add("current-tab")
    //  getfromSessionStorage();


    //  function switchTab (clickeTab){
    //     if (clickeTab != currentTab) {
    //         currentTab.classList.remove("current-tab");
    //         currentTab = clickeTab;
    //         currentTab.classList.add("current-tab");
    //         if (!searchForm.classList.contains("active") ){
    //             userInfoContainer.classList.remove("active");
    //             grantAccess.classList.remove("active");
    //             searchForm.classList.add("active");


    //         }
    //         else{
    //             searchForm.classList.remove("active");
    //             userInfoContainer.classList.remove("active");
    //             getfromSessionStorage();

    //         }


    //     }


    //  }

    //  userTab.addEventListener("click", ()=>{
    //     switchTab(userTab)
    //  })

    //  searchTab.addEventListener("click",()=>{
    //     switchTab(searchTab)
    //  })
      

    //  function getfromSessionStorage(){
    //     const localCodinates = sessionStorage.getItem("user-codinates");
    //     if(!localCodinates){
    //         grantAccess.classList.add("active");

    //     }
    //     else{
    //         const codinates = JSON.parse(localCodinates);
    //         fetchUserWeatherInfo();

    //     }
    //  }

    //   async function fetchUserWeatherInfo(codinates){
    //     const {lat,lon} = codinates;
    //     grantAccess.classList.remove("active");
    //     loadingScreen.classList.add("active");

    //     try{
    //         const response = await fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    //             );
    //             const data = await response.json();
                 
    //             loadingScreen.classList.remove("active");
    //             userInfoContainer.classList.add("active");
    //             renderWeatherInfo(data);



    //     }
    //     catch(err){
    //         loadingScreen.classList.remove("active");
    //         // hm
            

    //     }
         
        

    //  }

    //  function renderWeatherInfo(weatherInfo){
    //     const cityName = document.querySelector("[data-cityname]");
    //     const cityIcon = document.querySelector("[data-countryIcon]");
    //     const des = document.querySelector("[data-weatherDes]");
    //     const weatherIcon = document.querySelector("[data-weatherIcon]");
    //     const temp = document.querySelector("[data-tem]");
    //     const windSpeed = document.querySelector("[data-windspeed]");
    //     const humidity = document.querySelector("[data-humidity]");
    //     const cloud = document.querySelector("[data-clouds]");
        


    //  }


    // cityName.innertext= weatherInfo?.name;
    // cityIcon.srcsrc = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowercase()}.png`;
    // des.innertext = weatherInfo?.weather?.[0]?.description;
    // weatherIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
    // temp.innertext = weatherInfo?.main?.temp;
    // windSpeed.innertext = weatherInfo?.wind?.speed;
    // humidity.innertext = weatherInfo.main?.humidity;
    // cloud.innertext = weatherInfo?.clouds?.all;


    // function getlocation(){
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     }
    //     else{
    //         // hm
    //     }
    // }
    //  function showPosition(position){
    //     const userCoodinates = {
    //         lat : position.coords.latitude,
    //         log : position.coords.longitude,

    //     }
    //     sessionStorage.setItem("user-Coodinates",JSON.stringify(userCoodinates));
    //     fetchUserWeatherInfo(userCoodinates);


    //  }
    //   const grantAccessBtn = document.querySelector("[data-grantAccess]");
    //   grantAccessBtn.addEventListener("click",getlocation);
        


    //   const searchInput = document.querySelector("[ data-searchInput]");
    //   searchForm.addEventListener("submit",(e) => {
    //     e.preventDefault();
    //     let cityname = searchInput.value;

    //     if(cityname == "")
    //     return;
    //     else
    //         fetchSearchWeatherInfo(cityName);

    //   })
    //   async function fetchSearchWeatherInfo(city){
    //     loadingScreen.classList.add("active");
    //     userInfoContainer.classList.remove("active");
    //     grantAccess,classList.remove("active");

    //     try {
    //         const response = await fetch(
    //             `ttps://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    //         );
    //         const data = await response.json();
    //         loadingScreen.classList.remove("active");
    //         userInfoContainer.classList.add("active");
    //         renderWeatherInfo(data);

            
    //     }
    //     catch(err){
    //         // hm
    //     }

    //   }

    const userTab = document.querySelector("[data-userWeather]");
    const searchTab = document.querySelector("[data-searchWeather]");
    const userContainer = document.querySelector(".weather-container");
    
    const grantAccessContainer = document.querySelector(".grant-location-container");
    const searchForm = document.querySelector("[data-searchForm]");
    const loadingScreen = document.querySelector(".loading-container");
    const userInfoContainer = document.querySelector(".user-info-container");
    
    //initially vairables need????
    
    let oldTab = userTab;
    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
    oldTab.classList.add("current-tab");
    getfromSessionStorage();
    
    function switchTab(newTab) {
        if(newTab != oldTab) {
            oldTab.classList.remove("current-tab");
            oldTab = newTab;
            oldTab.classList.add("current-tab");
    
            if(!searchForm.classList.contains("active")) {
                //kya search form wala container is invisible, if yes then make it visible
                userInfoContainer.classList.remove("active");
                grantAccessContainer.classList.remove("active");
                searchForm.classList.add("active");
            }
            else {
                //main pehle search wale tab pr tha, ab your weather tab visible karna h 
                searchForm.classList.remove("active");
                userInfoContainer.classList.remove("active");
                //ab main your weather tab me aagya hu, toh weather bhi display karna poadega, so let's check local storage first
                //for coordinates, if we haved saved them there.
                getfromSessionStorage();
            }
        }
    }
    
    userTab.addEventListener("click", () => {
        //pass clicked tab as input paramter
        switchTab(userTab);
    });
    
    searchTab.addEventListener("click", () => {
        //pass clicked tab as input paramter
        switchTab(searchTab);
    });
    
    //check if cordinates are already present in session storage
    function getfromSessionStorage() {
        const localCoordinates = sessionStorage.getItem("user-coordinates");
        if(!localCoordinates) {
            //agar local coordinates nahi mile
            grantAccessContainer.classList.add("active");
        }
        else {
            const coordinates = JSON.parse(localCoordinates);
            fetchUserWeatherInfo(coordinates);
        }
    
    }
    
    async function fetchUserWeatherInfo(coordinates) {
        const {lat, lon} = coordinates;
        // make grantcontainer invisible
        grantAccessContainer.classList.remove("active");
        //make loader visible
        loadingScreen.classList.add("active");
    
        //API CALL
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
              );
            const  data = await response.json();
    
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
        catch(err) {
            loadingScreen.classList.remove("active");
            //HW
    
        }
    
    }
    
    function renderWeatherInfo(weatherInfo) {
        //fistly, we have to fethc the elements 
    
        const cityName = document.querySelector("[data-cityName]");
        const countryIcon = document.querySelector("[data-countryIcon]");
        const desc = document.querySelector("[data-weatherDesc]");
        const weatherIcon = document.querySelector("[data-weatherIcon]");
        const temp = document.querySelector("[data-temp]");
        const windspeed = document.querySelector("[data-windspeed]");
        const humidity = document.querySelector("[data-humidity]");
        const cloudiness = document.querySelector("[data-cloudiness]");
    
        console.log(weatherInfo);
    
        //fetch values from weatherINfo object and put it UI elements
        cityName.innerText = weatherInfo?.name;
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        desc.innerText = weatherInfo?.weather?.[0]?.description;
        weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temp.innerText = `${weatherInfo?.main?.temp} °C`;
        windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
        humidity.innerText = `${weatherInfo?.main?.humidity}%`;
        cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
    
    
    }
    
    function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            //HW - show an alert for no gelolocation support available
        }
    }
    
    function showPosition(position) {
    
        const userCoordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        }
    
        sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
        fetchUserWeatherInfo(userCoordinates);
    
    }
    
    const grantAccessButton = document.querySelector("[data-grantAccess]");
    grantAccessButton.addEventListener("click", getLocation);
    
    const searchInput = document.querySelector("[data-searchInput]");
    
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let cityName = searchInput.value;
    
        if(cityName === "")
            return;
        else 
            fetchSearchWeatherInfo(cityName);
    })
    
    async function fetchSearchWeatherInfo(city) {
        loadingScreen.classList.add("active");
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
    
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
              );
            const data = await response.json();
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
        catch(err) {
            //hW
        }
    }