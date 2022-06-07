const game = document.querySelectorAll("#game td")
const winText = document.querySelector("p.win")
let color = "orange"

game.forEach((e,index) => {
    e.addEventListener("click", function() {
        e.style.backgroundColor == color ? e.style.backgroundColor = "white" : e.style.backgroundColor = color
        propagation(index)
    })
});

function propagation(i) {
    switch (i%3) {
        case 0 :
            try{game[i+1].style.backgroundColor == color ? game[i+1].style.backgroundColor = "white" : game[i+1].style.backgroundColor = color} catch(e){}
            try{game[i+3].style.backgroundColor == color ? game[i+3].style.backgroundColor = "white" : game[i+3].style.backgroundColor = color} catch(e){}
            try{game[i-3].style.backgroundColor == color ? game[i-3].style.backgroundColor = "white" : game[i-3].style.backgroundColor = color} catch(e){}
            break;
        case 1 : 
            try{game[i+1].style.backgroundColor == color ? game[i+1].style.backgroundColor = "white" : game[i+1].style.backgroundColor = color} catch(e){}
            try{game[i+3].style.backgroundColor == color ? game[i+3].style.backgroundColor = "white" : game[i+3].style.backgroundColor = color} catch(e){}
            try{game[i-3].style.backgroundColor == color ? game[i-3].style.backgroundColor = "white" : game[i-3].style.backgroundColor = color} catch(e){}
            try{game[i-1].style.backgroundColor == color ? game[i-1].style.backgroundColor = "white" : game[i-1].style.backgroundColor = color} catch(e){}
            break;
        case 2 : 
            try{game[i+3].style.backgroundColor == color ? game[i+3].style.backgroundColor = "white" : game[i+3].style.backgroundColor = color} catch(e){}
            try{game[i-3].style.backgroundColor == color ? game[i-3].style.backgroundColor = "white" : game[i-3].style.backgroundColor = color} catch(e){}
            try{game[i-1].style.backgroundColor == color ? game[i-1].style.backgroundColor = "white" : game[i-1].style.backgroundColor = color} catch(e){}
            break;
    }
    win()
}

function win() {
    let gg = true
    game.forEach(element => {
        if (element.style.backgroundColor != color) {
            gg = false
        }
    });
    if(gg) {
        winText.textContent = "BRAVO !"
        winText.style.display = "block"
        console.log("Win !")
    }
}

document.querySelector("button").addEventListener("click", function () {
    game.forEach((e) => {
        e.style.backgroundColor = "white"
    })
    document.querySelector("p.win").textContent = ""
})

console.log(game)