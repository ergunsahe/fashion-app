export const onLargestSelectionSizes = (data) => {
    const orginalData = [...data]
    let brands=[]
    let brand;
    orginalData.forEach((pro) =>{
        if (brand === undefined){
            brand= pro
        }else if ( pro?.sizes?.length > brand?.sizes?.length){
            brand=pro
        }
    })
    orginalData.forEach((pro) =>{
        if (brand.sizes.length === pro.sizes.length ){
            brands.push(pro)
        }
    })
    const result = brands.reduce((unique, o) => {
        if(!unique.some(obj => obj.brand === o.brand)) {
          unique.push(o);
        }
        return unique;
    },[]);
      
    return result
}
export const onMostProducts = (data) => {
    const orginalData = [...data]
    let brands=[]
    orginalData.forEach((pro) =>{
        if ( parseInt(pro.priceO) < 40){
            brands.push(pro)
        }
    })

    let counter = {}
    brands.forEach(function(obj) {
        counter[obj.brand] = (counter[obj.brand] || 0) + 1
    })
    

    return Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b);
}


export const onLowestAverage = (data) => {
    const orginalData = [...data]
    let brands=[]
    orginalData.forEach((pro) =>{
        if(pro.sizes.includes("32")){
            brands.push(pro)
        }
    })
    const result = brands.reduce((unique, o) => {
        if(!unique.some(obj => obj.brand === o.brand)) {
          unique.push(o);
        }
        return unique;
    },[]);
    const brandUnique = []
    for (let i in result){
        brandUnique.push(result[i].brand)
    }

    const lastUniqueAverage = []
    
    for (let i in brandUnique){
        let count = 0
        let sum =0
        let newObj ={}
        for (let k  in brands){
            if(brands[k].brand === brandUnique[i]){
                sum = sum + brands[k].priceO
                count = count + 1
                newObj[brandUnique[i]] = sum / count
                // console.log(brands[k].priceO)
            }
        }
        
        lastUniqueAverage.push(newObj)
    }
    
    let minAvrg = 0
    let minBrand =""
    for (let i in lastUniqueAverage){
        // console.log(lastUniqueAverage[i])
        if (minAvrg === 0){
            minAvrg = Object.values(lastUniqueAverage[i])[0]
            minBrand= Object.keys(lastUniqueAverage[i])[0]
            
        }else if (minAvrg > Object.values(lastUniqueAverage[i]) ){
            minAvrg = Object.values(lastUniqueAverage[i])[0]
            minBrand= Object.keys(lastUniqueAverage[i])[0]
  
        }else {
            minAvrg = minAvrg   
        }
    }
    // console.log(minBrand, minAvrg)
    return [minBrand, minAvrg] 
}