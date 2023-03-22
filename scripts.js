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

            for(i=1;i<=10;i++){
                var elemento = document.getElementById(`filme${i}`);
                elemento.innerHTML = `
                <a href="www.themoviedb.org/movie/${dados.results[i].id}",target="_blank"><img src="${"https://image.tmdb.org/t/p/w500"+dados.results[i].poster_path}"></img></a> 
                <h2>${dados.results[i].title}<h2>
                <p>Public Evaluation: ${dados.results[i].vote_average}/10</p>
                <p>Release Date: ${dados.results[i].release_date}</p>
                <p>Overview: ${resumo = dados.results[i].overview}</p>`;               
                
            }
        });
        

}
