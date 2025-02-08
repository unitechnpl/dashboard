
// const texts = [
//   "<br>"
// ];

// let lineIndex = 0;
// let charIndex = 0;
// const delay = 13.5;
// const eraseDelay = 1300;

// function type() {
//   const typewriter = document.getElementById('#int');
//   const line = texts[lineIndex];
//   typewriter.textContent += line[charIndex];
//   charIndex++;

//   if (charIndex < line.length) {
//     setTimeout(type, delay);
//   } else {
//     setTimeout(erase, eraseDelay);
//   }
// }

// function erase() {
//   const typewriter = document.getElementById('#int');
//   const line = texts[lineIndex];
//   typewriter.textContent = line.substr(0, charIndex);
//   charIndex--;

//   if (charIndex >= 0) {
//     setTimeout(erase, delay);
//   } else {
//     lineIndex = (lineIndex + 1) % texts.length; // Move to the next line
//     charIndex = 0; // Reset charIndex to 0 for the new line
//     setTimeout(type, delay);
//   }
// }

// type();

// https://www.giftmandu.com/lindt-lindor-milk-chocolate-200g

// https://ain-crad.github.io/First-Anniversary-of-Love/

// https://www.michaeltan.org/love_for_your_lover/ // https://github.com/MichaelTan9999/love_for_your_lover

(async function() {
  const chars = [
    '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', "!", "<", "+", "-", "_", ".", "/", "R", "K"
  ];
  let text = "Ryzen // Kriss";
  // inster htrml into js string.
  // text = text.toUpperCase();

  while (true) {
    // Shuffle the chars array
    shuffleArray(chars);

    let res = "";

    for (let i of text) {
      if (i === " ") {
        res += " ";
        document.querySelector('.text-2').textContent = res;
      } else {
        for (let j of chars) {
          if (j !== "") {
            document.querySelector('.text-2').textContent = res + j;
            await new Promise(resolve => setTimeout(resolve, 10)); // Decrease delay by 40%
            if (i === j) {
              res += j;
              break;
            }
          }
        }
      }
    }

    // Wait for 10 seconds  & 69 MS before vanishing
    await new Promise(resolve => setTimeout(resolve, 6690));

    // Replace the text with a single dash during waiting period
    document.querySelector('.text-2').textContent = "-";

    // Wait for 1.16 seconds before looping again
    await new Promise(resolve => setTimeout(resolve, 1160));
  }
})();

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// logo slider script start



// logo slider script end




// Toggle the menu on mobile
document.querySelector('.menu-responsive').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});
