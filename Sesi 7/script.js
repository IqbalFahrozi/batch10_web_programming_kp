function helloName(params){
    if (params == "iqbal"){
        return 'Hello ${params}';
    } else {
        return 'Anda bukan Iqbal';
    }
}

console.log(helloName("Iqbal"));