// day 07 task

    const result = new XMLHttpRequest();
    result.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    result.send();
    result.responseType = "json";
    result.onload = function displayResult () {
        const countries = result.response;
        console.log(countries);


   // TO GET ALL THE ASIA REGION COUNTRIES USING FILTER  
   
   
        let res1 = countries.filter((index)=>{
            return index.region === "Asia";
        })
        console.log(res1);
    


    // TO GET ALL THE COUNTRIES WHOSE POPULATION IS BELOW 2 LAKHS

    let res2 = countries.filter((value)=>{
        return value.population > 200000;
    })
    console.log(res2);


    //  TO GET SUM OF THE POPULATION OF THE COUNTRIES USING REDUCE -
   
 
   let res4 = countries.reduce((accu,object)=>{
    
    return accu + object.population;
   },0);
   console.log(res4);
    

   // PRINT THE DETAILS NAME,FLAG AND CAPITALS USING FOREACH -

   countries.forEach(element => {
   console.log(`Name of country : ${element.name}, Capital : ${element.capital}, Flag : ${element.flag},`);
   });

    // TO GET ALL THE COUNTRIES THAT USE US DOLLARS -

    let res3 = countries.filter((element)=>{
         return element.currencies[0].code === "USD";

        })
       console.log(res3);


   



}
