/////////////////////////////strart js code //////////////////////////////////
let request = new (XMLHttpRequest)
request.open("GET","https://dummyjson.com/products")
request.responseType="json"
request.send()
// const Productscontainer=document.querySelector('.Products-container')
request.onload=function(){
    const Productscontainer=document.querySelector('.Products-container')

    console.log(request.response); 
    const products = request.response.products
    request.response.products.forEach(element => {
       /// let rating =()=>{}
    let productDiv=document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML=
        `
             <h3>${element.title} </h3>
             <img src=${element.images[0]} alt="${element.title}">
             <p><strong> Category:</strong>${element.category}:</p>
            <p> <strong> Price:</strong>${element.price}<strong>$</strong></p>
            <p><strong> Rating:</strong><i class="fa-duotone fa-solid fa-star"> ${element.rating}</i></p>
             <a class="more-details" href="oneproduct.html?id=${element.id}"> More Details</a>
             <p> <i class="fa-solid fa-cart-plus"></i>  <i class="fa-solid fa-cart-shopping"></i> </p>
            `
            Productscontainer.appendChild(productDiv) ; 
    });
       }
       ////////////////////Start code to get one product////////////////////////
    function getProductIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
    
    }
// console.log(id)
    document.addEventListener('DOMContentLoaded', () => {
        const productId = getProductIdFromUrl();
        if (productId) {
            fetch(`https://dummyjson.com/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                               

                    let reviewHtml = ""; // Initialize an empty string to store review HTML

                    if (product.reviews) {
                      product.reviews.forEach(review => {
                        // Build HTML for each review
                        reviewHtml += `
                          <p>
                            Name: ${review.reviewerName} <br/>
                            Email: ${review.reviewerEmail} <br/>
                            Date: ${review.date} <br/>
                            Comment: ${review.comment} <br/>
                            Customer Rating: <i class="fa-duotone fa-solid fa-star"> </i>
                            ${review.rating} <br/>
                          </p>
                        `;
                      });
                    }
                    const oneproductContainer = document.querySelector('.Product-details');
                    oneproductContainer.innerHTML = `
                        <h2>${product.title}</h2>
                        <img src="${product.images[0]}" alt="${product.title}">
                        <p><strong>Category:</strong> ${product.category}</p>
                        <p><strong>Price:</strong> ${product.price}$</p> <p>
                        <p><strong>Rating:</strong><i class="fa-duotone fa-solid fa-star"> </i>
                          ${product.rating}</p>
                        <strong> stock:</strong> ${product.stock} ${product.availabilityStatus} </p>
                        <details>
                        <summary>Product Details:</summary>
                        <p><strong> Discount:</strong> ${product.discountPercentage} %  </p>
                        <p><strong> warrantyInformation:</strong> ${product.warrantyInformation}  </p>
                        <p><strong>Description:</strong> ${product.description}</p>
                        </details>
                        <details>
                        <summary>Dimensions:</summary>
                        <strong>Width:</strong> ${product.dimensions.width},<br/>
                        <strong>height:</strong> ${product.dimensions.height},<br/>
                        <strong>depth:</strong>  ${product.dimensions.depth},<br/>
                         </p>
                         </details>
                         
                         <details>
                         <summary>Reviews:</summary>
                        <p> ${reviewHtml}</p>
                         </details>
                         <p>
                         <i class="fa-solid fa-cart-plus"></i> 
                        <i class="fa-solid fa-cart-shopping"></i>
                         </p>
                        
                    `;
                })
                .catch(error => console.error('Error fetching product details:', error));
        }
    });
    
///////////////////////////end of code ///////////////////////////////////////////

///////////////////////////tries//////////////////////////////////////////////
    /*
     <a onclick="leave(${element.id})"> More Details </a>
       
     function leave(id){
        location.href="oneproduct.html"
       }
        
// Add event listener to "More Details" links
    document.querySelectorAll('.more-details').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = this.getAttribute('data-id');
            fetchProductDetails(productId);
        });
    });
};

function fetchProductDetails(productId) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://dummyjson.com/products/${productId}`);
    request.responseType = "json";
    request.send();
    request.onload = function() {
        const product = request.response;
        console.log(product);
*/

