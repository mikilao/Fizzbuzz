function Fizzbuzz1(a, b){
    let str =" ";
    for(let i = 0; i <= 100; i++){
        if(i % a == 0 && i % b ==0){
            str += "Fizz Buzz"
            console.log(str)
        }
        else if (i % a ==0){
            str += "Fizz ";
        }
        else if(i % b ==0){
            str += "Buzz "
        }
        else{
            str += i + " ";
        }
    } return str;
   
}
function buzzIt(){
  let output = "";
  let value1 = document.getElementById('Fizzvalue').value;
  let value2 = document.getElementById('Buzzvalue').value;
    output = Fizzbuzz1(value1, value2);
    document.getElementById('results').innerHTML = output;
}