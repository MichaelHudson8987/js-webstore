//Function that receives data from api via axios
async function getData(){
  try {
    let response = await axios.get("https://codethesolution.com/nscc/project2700-hudson.php");
    let productData = response.data;
    createProducts(productData);
  } 
  catch (error){
    console.error("Error: ", error);
  }

}
  
//Calling receive data function
getData();

//Function to dynamically create products
function createProducts(productData){

  //Getting empty products div
  let product = document.getElementById("Products");
  
  //Adding row to empty div
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  product.appendChild(row);

  //Repeats for each product in object
  for (let i = 0; i < productData.length; i++){

    //Assigning object values to variables
    let apiObject = productData[i];
    let title = apiObject.title;
    let price = apiObject.price;
    let description = apiObject.description;
    let image_main = apiObject.image_main;
    let image_large = apiObject.image_large;
    let image_gallery_1 = apiObject.image_gallery_1;
    let image_gallery_2 = apiObject.image_gallery_2;
    let image_gallery_3 = apiObject.image_gallery_3;
    let image_gallery_4 = apiObject.image_gallery_4;
    let image_gallery_5 = apiObject.image_gallery_5;
    let image_gallery_6 = apiObject.image_gallery_6;

    //Creating main page products
    let column = document.createElement("div");
    column.setAttribute("class", "col-lg-4 justify-content-center");
    row.appendChild(column);

    let block = document.createElement("div");
    block.setAttribute("class", "d-block text-center");
    column.appendChild(block);

    let productBorder = document.createElement("div");
    productBorder.setAttribute("class", "productBorder rounded");
    block.appendChild(productBorder);

    let productName = document.createElement("p");
    productName.setAttribute("class", "productName");
    productName.textContent = title;
    productBorder.appendChild(productName);

    let image = document.createElement("img");
    image.setAttribute("src", "images/" + image_main);
    image.setAttribute("class", "rounded productMainImage");
    image.setAttribute("alt", "mainImage");
    productBorder.appendChild(image);

    let line = document.createElement("hr");
    productBorder.appendChild(line);

    let productPrice = document.createElement("p");
    productPrice.setAttribute("class", "productPrice");
    productPrice.textContent = "$" + price;
    productBorder.appendChild(productPrice);

    //Arrays for different modal id/href values
    var modalId = ["RedRoseModal", "MixedTulipModal", "SunflowerDaisyModal", "OrchidModal", "WreathModal", "GardenModal"];
    var modalHref = ["#RedRoseModal", "#MixedTulipModal", "#SunflowerDaisyModal", "#OrchidModal", "#WreathModal", "#GardenModal"];
      
    let viewButton = document.createElement("a");
    viewButton.setAttribute("href", modalHref[i]);
    viewButton.setAttribute("rel", "modals:open");
    viewButton.setAttribute("class", "openModal");
    viewButton.textContent = "View";
    productBorder.appendChild(viewButton);

    //Creating modals
    let modal = document.createElement("div");
    modal.setAttribute("id", modalId[i]);
    modal.setAttribute("class", "modals");
    productBorder.appendChild(modal);
    
    let modalProductName = document.createElement("p");
    modalProductName.setAttribute("class", "productName");
    modalProductName.textContent = title;
    modal.appendChild(modalProductName);

    let imageLarge = document.createElement("img");
    imageLarge.setAttribute("src", "images/" + image_large);
    imageLarge.setAttribute("class", "productLargeImage rounded");
    imageLarge.setAttribute("alt", "LargeImage");
    modal.appendChild(imageLarge);

    let modalProductPrice = document.createElement("p");
    modalProductPrice.setAttribute("class", "productPrice");
    modalProductPrice.textContent = "$" + price;
    modal.appendChild(modalProductPrice);

    let cartButton = document.createElement("a");
    cartButton.setAttribute("href", modalHref[i]);
    cartButton.setAttribute("rel", "modals:close");
    cartButton.setAttribute("class", "cartButton");
    cartButton.textContent = "Add to Cart";
    modal.appendChild(cartButton);

    let productDescription = document.createElement("p");
    productDescription.setAttribute("class", "productDescription");
    productDescription.textContent = description;
    modal.appendChild(productDescription);

    //Creating fancybox
    let gallery = document.createElement("div");
    gallery.setAttribute("class", "wrapper");
    modal.appendChild(gallery);

    //Assigning all gallery images to fancybox
    for (j = 0; j < 6; j++){

      //Gallery image array
      var galleryArray = [image_gallery_1, image_gallery_2, image_gallery_3, image_gallery_4, image_gallery_5, image_gallery_6];

      let fancyBox = document.createElement("a");
      fancyBox.setAttribute("href", "images/" + galleryArray[j]);
      fancyBox.setAttribute("data-fancybox", "Gallery");

      let smallImage = document.createElement("img");
      smallImage.setAttribute("src", "images/" + galleryArray[j]);
      smallImage.setAttribute("class", "productSmallImage");
      smallImage.setAttribute("alt", "smallImage");
      fancyBox.appendChild(smallImage);
      gallery.appendChild(fancyBox);

    }
    
  }
  
}