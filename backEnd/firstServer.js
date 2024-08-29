//On inclus la librairie http qui permet la création d'un serveur http basique
var http = require('http');
http.createServer(function (request, response) {
    console.log(request);
        //Le type de contenu sera HTML, le code de réponse 200 (page correctement chargée)
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello world');
    }).listen(3000);
//On affiche un petit message  dans la console histoire d'être sûr que le serveur est lancé
console.log('Visit http://localhost:3000 ');
