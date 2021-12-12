// Selezione del ID in HTML
let container = document.getElementById("container");

// Creazione ciclo 0-100
for (i = 1; i <= 100; i++) {

    // Multipli di 3 e 5=fizzbuzz
    if ((i%3 == 0) && (i%5 == 0)) {
      write = "FizzBuzz";
    }
  // Multipli di 3=fizz
  else if (i % 3 == 0) {
      write="Fizz";
      
  }

  // Multipli di 5=buzz
  else if (i % 5 == 0) {
    write = "Buzz";
    
  }

  else {
      write=i;
  }
  console.log(write);
    container.innerHTML += '<div class="box '+ write + '</div>';
}
