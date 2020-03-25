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
            callback(undefined,body.daily.data[0].summary+'it is currently a '+body.currently.temperature+' degrees out')
        }
    })
}

module.exports=forecast