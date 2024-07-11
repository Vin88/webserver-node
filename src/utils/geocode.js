import request from 'request';
export const API_KEY = "04fdc9f84f0b4c0e9c6121345242305";
export const geocode = (address, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?q=${address}6&key=${API_KEY}`
    debugger;
    request({ url, json: true }, (error, { body }) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body?.features?.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.location?.lat,
                longitude: body.location?.lon,
                location: body.location?.name
            })
        }
    })
}