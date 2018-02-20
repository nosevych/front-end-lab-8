function getTransformedArray(array, func){

    let Trans =[];
    
    forEach(array, function(i){
    Trans.push(func(i));
    });
    return Trans;
    
}