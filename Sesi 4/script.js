function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function checkPrime() {
    const inputElement = document.getElementById("inputNumber");
    const number = parseInt(inputElement.value);
    const resultElement = document.getElementById("result");
  
    if (isNaN(number)) {
      resultElement.textContent = "Masukkan angka yang valid.";
    } else {
      const isPrimeNumber = isPrime(number);
      resultElement.textContent = isPrimeNumber ? "Bilangan ini adalah bilangan prima." : "Bilangan ini bukan bilangan prima.";
    }
  }
  