  function collectIds(array){
   
    var arr =[];
    var ids=[];

    arr = getFilteredArray(array, function(a){
    return a.rating > 3.0;
    });

    ids = getTransformedArray(arr, function(a){
    return a.id;
    });
        
    return ids;

}
