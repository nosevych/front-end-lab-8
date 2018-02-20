function getFilteredArray(array, func){

    var SecondArray =[];
    
    forEach(array, function(i){
        
        if(func(i)){
    SecondArray.push(i);
        }
    });
    return SecondArray;
    
}
