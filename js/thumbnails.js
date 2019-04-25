'use strict';
// JavaScript for use with the index page.


function thumbNail(){
    fetch(buildUrl(''))
        .then(function (response) {
            if (response.status !== 200){
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to succeeded');
            console.log(json);

            for (var i=0; i < json.length; i++) {
                var currentImage = json[i];
                $('#table-body').append(`
                    <tr>
                        <td><img src="data:image/png;base64, ${currentImage.thumbnail}"</td>
                        <td>${currentImage.author}</td>
                        <td>${currentImage.name}</td>
                        <td>${currentImage.license}</td>
                    </tr>
                `);
            }
        })
        .catch(function (err) {
            console.error('Request to failed: ', err);
        });
}
$(function () {
    thumbNail();
});
