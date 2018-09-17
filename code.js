
let list = document.querySelector("ul");

function printPhotos() {
    let tag = document.querySelector("input").value;
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&
          api_key=75a81266e444ea3d6dad9d8154782ff1&
          tags=${tag}&per_page=25&format=json&nojsoncallback=1`)
   .then((response) => {
    return response.json();
    })
   .then((data)=>{
         this.photos = data.photos.photo;
         console.log(this.photos);
         this.photos.forEach(photo => {
         let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
         let li = document.createElement("li");
         li.innerHTML = `<img src=${url} alt=""></img>`;
         this.pictures.append(li);
       })
   })
  .catch((err)=>{
      console.log(err);
   });
}