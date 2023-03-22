function request(){
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=3d772faa9a4f43d2587f10a31e5d440a";

    fetch(filename)
    .then(response => response.json())
    .then(dados =>
        {   
            var imagem = "https://image.tmdb.org/t/p/w500"+dados.results[0].poster_path
            var titulo = dados.results[0].title
            var popularide = dados.results[0].popularity
            var data = dados.results[0].release_date
            var resumo = dados.results[0].overview

            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id","teste");
            document.getElementById("teste").innerHTML = titulo;



            //console.log(titulo);
            //console.log(imagem);
            //console.log(popularide);
            //console.log(data);
            //console.log(resumo);
        });
        

}
