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
    // let brand;
    orginalData.forEach((pro) =>{
        if(pro.sizes.includes("32")){
            brands.push(pro)
        }
    })
    console.log(brands)
    // orginalData.forEach((pro) =>{
    //     if (brand.sizes.length === pro.sizes.length ){
    //         brands.push(pro)
    //     }
    // })
    // const result = brands.reduce((unique, o) => {
    //     if(!unique.some(obj => obj.brand === o.brand)) {
    //       unique.push(o);
    //     }
    //     return unique;
    // },[]);
      
    // return result
}