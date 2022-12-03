const newGameButton = document.querySelector('a.btn');

newGameButton.addEventListener('click', function() {
   
   // § 1 - recupero il parent
   const gridContainer = document.querySelector('div.grid');
   // console.log(gridContainer);
   
   
   
   
   // § 1.5 per ogni elemento dei 64 che voglio creare
   for (let  i = 1; i <= 100; i++){
   
      const newSquare = getMeANewSquare();
      newSquare.innerHTML = `<span class="fs-3 m-auto"> ${i}</span>`; 
   
      // § 4 - aggiungo il div al parent
      gridContainer.appendChild(newSquare);
   }

}, {once:true});




// funzione per creare un quadrato
function getMeANewSquare(){
   // § 2 - creo il div
   const newSquare = document.createElement('div');

   // § 3 - gli attribuisco le proprietà che voglio
   newSquare.classList.add('square', 'd-flex');

   // ? 3.1 - tra le quali un comportamento sul click
   newSquare.addEventListener("click", function(){
      newSquare.classList.toggle('clicked');
   });

   return newSquare;
}