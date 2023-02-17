const api_url1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";
const api_url2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

function click () {
    let dt = fetch(api_url1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log("Success:", data.detail);
    });
    console.log(dt);
}

function click1 () {
    let in4 = fetch(api_url2)
    .then(function (response1) {
        return response1.json();
})
.then(function (data1){
    console.log(data1)
});
console.log(in4);
}
