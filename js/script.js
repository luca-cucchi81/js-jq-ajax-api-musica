// SCOPO DEL GIOCO: Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout

$.ajax({
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data) {
        var albums = data.response;
        getAlbums(albums)
    },
    error: function (errore) {
        alert('Attenzione è presente un errore');
    }
});


// <<..FUNZIONI..>>
function getAlbums(albumsList){
    albumsList.forEach(function (cd) {      //trovato su w3school per selezionare i singoli oggetti dell'array dell'API
        var source = $('#card-template').html();
        var template = Handlebars.compile(source);
        var dischi = cd ;                  //per matchare le chiavi ho dovuto dar loro lo stesso nome anche nell'HTML
        var disco = template(dischi);
        $('.container').append(disco);
        console.log(cd);
    });
}
