
let count=0;
let num = 15;
for(let i=2;i<=num;i++){

  if(num%i==0){
    count++;
  }
}
if(count==1){
    console.log("It Is Prime Number");
} else {
    console.log("It is not Prime Number");
}


// 2. Paliondrome String
let str = "ram";

let bag="";
for(let i=0;i<str.length;i++){
  bag+=str[i]
}

let rev="";
for(let j=str.length-1;j>=0;j--){
  rev+=str[j]
}
if(bag==rev){
  console.log("It is a palindrome")
}else{
  console.log("It is not a palindrome")
}