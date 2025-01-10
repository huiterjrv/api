let cfg = {
    p_agency_filterid: "1",
    p1: "1028785",
    p2: "05318f2ce838f039597f4de6febd1689a674abf0"
}

fetch(`https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=${cfg.p_agency_filterid}&p1=${cfg.p1}&p2=${cfg.p2}`, {
    method: 'GET',
    headers: {
        "Hola": "soy yooop"
    },
    redirect: 'follow',
})
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(error => console.log('error --> ', error));

"https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1028785&p2=05318f2ce838f039597f4de6febd1689a674abf0"




fetch("https://api-7ve4.onrender.com/", {
    method: 'GET',
    headers: {
        "Hola": "soy yooop"
    },
    redirect: 'follow',
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

fetch("https://webapi.resales-online.com/V6/SearchProperties?p_agency_filterid=1&p1=1028785&p2=05318f2ce838f039597f4de6febd1689a674abf0")
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
