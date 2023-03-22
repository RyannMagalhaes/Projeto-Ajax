function request(){
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=3d772faa9a4f43d2587f10a31e5d440a";

    console.log(fetch(filename).then(response => response.json()).then(dados => document.getElementById("teste").innerHTML = `${dados[0].id}`));
}