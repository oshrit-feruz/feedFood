# mishloha pai documentation

- get all restuarants:

`url:POST`

```
https://webapi.mishloha.co.il/api/rests/Filter
```

`params: `

```
uuid: d68c2b18-0f76-450b-948e-b455f161e2e2
apiKey: BA6A19D2-F5BD-4B75-A080-6BD1E2FBEF54
cityName: city name
streetName:
freeText:
cityID: 0
streetID: 0
streetNum:
longt: 34.888075
lat: 31.951014
type: types
kashrut: null
subTypes: []
foodTypes: []
sort: rank
onlineAvailable: false
takeaway: false
isMoreSearch: false
paymentTypeID: null
isNewSearchCode: true
offset: 0
limit: 30
```

`body: `

```
{
   "sort": "rank",
   "offset": 0,
   "limit": 30,
   "paymentTypeID": null,
   "kashrut": "",
   "selectedMainCategory": {
      "id": "all",
      "displaySubTypeCount": 1
   },
   "isMoreSearch": false,
   "longt": null,
   "lat": null,
   "addressChnaged": true,
   "isNewSearchCode": true,
   "foodTypes": null || [foodTypeId],
   "city": "city name",
   "isDelivery": true,
   "cityID": 99,
   "cityName": "city name",
   "streetID": null,
   "streetName": "",
   "streetNum": null,
   "lastCityName": "city name,
   "lastStreetName": ""
}
```

- get city:

`url:GET`

```
https://webapi.mishloha.co.il/api/geolocation/getAddress
```

`params: `

```
cityName: city name
uuid: d68c2b18-0f76-450b-948e-b455f161e2e2
apiKey: BA6A19D2-F5BD-4B75-A080-6BD1E2FBEF54
culture: he_IL
isCacheGeocode: false
```

`url:GET`

```
https://webapi.mishloha.co.il/api/rests/getRestTypes
```

`params: `

```
uuid: d68c2b18-0f76-450b-948e-b455f161e2e2
apiKey: BA6A19D2-F5BD-4B75-A080-6BD1E2FBEF54
culture: he_IL
```

`general headers:`

```
authority:webapi.mishloha.co.il
path:/api/Rests/Filter?limit=30&uuid=24df106d-4ef6-40b5-b255-fddf1950af10&apiKey=ae2b5861-c99a-48d0-be59-7c5321cc130e&sessionID=79199d79-d0da-49a6-83e4-20bd14d9bff8&culture=he_IL
scheme:https
accept:application/json, text/plain, */*
origin:https://www.mishloha.co.il
referer:https://www.mishloha.co.il/
```
