const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    url='https://api.darksky.net/forecast/4a8330b623ed8e02c823578a0cf96a4a/' + latitude + ','+longitude
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('unable to fetch the data',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find the location Try with other latitude and longitude',undefined)
        }
        else
        {
            console.log(body.daily)
            callback(undefined,body.daily.data[0].summary+' it is currently a '+body.currently.temperature+'. The high today is '+body.daily.data[0].temperatureHigh+' with low of '+body.daily.data[0].temperatureLow+' degrees out'+'. There is '+body.currently.precipProbability +' % chance of rain.')
        }
    })
}

module.exports=forecast