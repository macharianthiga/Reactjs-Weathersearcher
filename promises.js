function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('Nairobi').then(function(temp){
 console.log('Promise success: ' + temp)
}, function(err){
  console.log('Promise error:' + err)
})
