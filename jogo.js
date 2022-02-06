
var altura = 0
var largura = 0

var posX = 0
var posY = 0

var vidas = 3

var  tempo = 30

var respawTempo = 1500

var nivel = window.location.search.replace('?','')


if (nivel === 'facil') {
	respawTempo = 2000
}

if (nivel === 'medio') {
	respawTempo = 1500
}

if (nivel === 'dificil') {
	respawTempo = 1000
}

var cronometro = setInterval(function(){

	if (tempo > 0) {

		tempo -= 1

		document.getElementById('segundos').innerHTML = tempo

	}else{
		clearInterval(jogo)
		clearInterval(cronometro)
		window.location.href = 'vitoria.html'
	}

},1000)



function getTamanhoTela(){
	
	altura = window.innerHeight
	largura = window.innerWidth
}


function createRadomPosition(){
	posX = Math.floor(Math.random() * largura) -120

	if (posX < 0) {
		posX = posX + 120
	}

	if ((posX+120) > largura) {
		posX = posX - 120
	}

	posY = Math.floor(Math.random() * altura) -120

	if (posY < 0) {
		posY = posY + 120
	}

	if ((posY+120) > largura) {
		posY = posY - 120
	}
}


function addMosca(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if (vidas > 1) {
			
			document.getElementById('vida'+vidas).src = "imagens/coracao_vazio.png"
			vidas--
		}else{
			
			clearInterval(jogo)
			clearInterval(cronometro)
			window.location.href = 'gameover.html'
		}
		
	}

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()

	mosquito.style.position = 'absolute'
	mosquito.style.left = posX +'px'
	mosquito.style.top = posY +'px'

	mosquito.id = 'mosquito'

	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3)

	switch(classe){
		case 0:
			return 'mosquito0'

		case 1:
			return 'mosquito1'

		case 2:
			return 'mosquito2'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}

