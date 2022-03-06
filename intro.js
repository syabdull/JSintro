
// program  to check is prime no
 let no =2;
 isPrime=true;
 for(let  i=2;i*i<=no;i++){
     if(no%i==0){
         isPrime=false;
         break;
     }
 }
 if(isPrime==true){
     console.log("primeNo");
 }else{
     console.log("not a primeNo");
 }
