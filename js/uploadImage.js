function uploadImage() {

    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

    var author = document.getElementById("author");
    var name = document.getElementById("name");
    var licence = document.getElementById("licence");

    if (fileField.checkValidity() === false) {
        alert('You need to provide a file!');
        return;
    }

    if (author.checkValidity() === false) {
        alert("You need to provide an Author name!");
        return;
    }

    if (licence.checkValidity() === false) {
        alert("You need to provide a licence number!");
        return;
    }
    if (name.checkValidity() === false) {
        alert("You need to provide an Image name!");
        return;
    }
    formData.append('metadata', new Blob([JSON.stringify({
        author: author.value,
        name: name.value,
        license: licence.value
    })], {type: 'application/json'}));

    formData.append('rawdata', fileField.files[0]);

    fetch(buildUrl(''), {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            location.reload();
            alert("Your upload was successful!");
            return response.json();
        })

        .catch(error => console.error('Error', error)
            .then(response => console.log('Success:', JSON.stringify(response)))

        );
}

