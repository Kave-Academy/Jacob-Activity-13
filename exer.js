function run(){
}

function arm(){
    const number = document.getElementById("input").value;
    var numberOfDigits = number.length;
    var sum = 0;
    
    let temp = number => {

    for (i = 0; i < numberOfDigits; i++) {
      sum += Math.pow(number.charAt(i), numberOfDigits);
    }if (sum == number){
        return `${number} is an Armstrong number`;
    }else{
        return `${number} is not an Armstrong number`;
    }
    }

    document.getElementById("secondOutput").innerHTML = temp(number);
}