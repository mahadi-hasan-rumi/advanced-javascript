/**falsy values:
false;
0;
"";
null;
NaN;
undefined;

truthy values:
'0';" ",[],{},
*/



// const name = '0';
let name = 12;
console.log(name)
if(name || name == 0){
    console.log('condition is true')
}
else{
    console.log('condition is false')
}