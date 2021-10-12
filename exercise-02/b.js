const bexercise = (result) => {
    return new Promise((resolve, reject) => {
        api1((result1) => {
          console.log('result1: ',result1)
        }).then(response => {
            return new Promise((resolve, reject) => {
                api2((result2) => {
                  console.log('result2: ',result2)
                }).then(response => { 
                    return new Promise((resolve, reject) => {
                        api3((result3) => {
                          console.log('result3: ',result3)
                        }).then(response => {   
                        }).catch(e => {
                        })
                    })  
                }).catch(e => {
                })
            })
        }).catch(e => {
        })
    })
};