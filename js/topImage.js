'use strict';
// JavaScript for use with the index page.

var photoId;


function topImage(){
    fetch(buildUrl('/top'))
        .then(function (response) {
            if (response.status !==200){
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /top succeeded');
            console.log(json);

            photoId = json.id;

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition Top Rated image, ' + json.name);

            var author = $("#author" );
            author.text(json.author);

            var licence = $('#licence');
            licence.text(json.license);

            var name = $("#name");
            name.text(json.name);
        })
        .catch(function (err) {
            console.error('Request to /top failed: ', err);
        });
}
$(function () {
    topImage();
});
