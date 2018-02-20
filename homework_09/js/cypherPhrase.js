function cypherPhrase(Yurii, Nos){

    var arr = Nos.split("");

    for(var prop in Yurii){
        for(var i=0; i<arr.length; i++){
           
        if(prop == arr[i])
        {
        arr[i] = Yurii[prop];
        }
    }      
    }
    return arr.join('');
}