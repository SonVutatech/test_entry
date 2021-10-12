
api(function (result = 1) {
    console.log("result: ", result);
    api2(function (result2 = 2) {
        console.log('result2: ', result2);
        api3(function(result3 = 3){
            console.log('result3: ', result3);
            });
    });
    
});

