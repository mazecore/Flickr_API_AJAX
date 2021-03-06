
const list = document.querySelector("ul");
const input = document.querySelector("input");

function printPhotos() {
    const tag = input.value;
    list.innerHTML = "";
    if (tag.length > 0) {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&
        api_key=75a81266e444ea3d6dad9d8154782ff1&
        tags=${tag}&per_page=24&format=json&nojsoncallback=1`
        ).then( response => {
              return response.json();
              }).then( res => {
                  res.photos.photo.forEach( photo => {
                      const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                      const li = document.createElement("li");
                      li.innerHTML = `<a href=${url}><img src=${url} alt=""></a>`;
                      list.append(li);
                  });
      })
      .catch((err)=> {
          console.error(err);
      });
    } else {
        alert('Please type something...')
    }
}

input.onkeydown = (event) => {
    if (event.which == 13) {
        event.preventDefault();
        printPhotos();
    }
};
