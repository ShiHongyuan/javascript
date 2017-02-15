/**
 * transform Object to String、Boolean、Number
 */



//String
console.log( {"name":"shihongyuan"}.valueOf(String) );   //{name:'shihongyuan'}
console.log( {}.valueOf(String) );                       //{}

//Boolean
console.log( {"name":"shihongyuan"}.valueOf(Boolean) );   //{name:'shihongyuan'}
console.log( {}.valueOf(Boolean) );                       //{}

//Number
console.log( {5:25}.valueOf(Number) );                   //{'5':25}
console.log( {}.valueOf(Number) );                       //{}