
(async()=>{
    const productcontainerEl=document.getElementById("productContainer");
    const url="https://fakestoreapi.com/products";

    const fetchproducts= async()=>{
        try{
            const res=await fetch(url);
            return await res.json();
        }catch(error){
            return error;
    
        }
    
    };



    const products= await fetchproducts();

    const generateproduct=(product)=>{
        return `
       
        <div class="product_card">
    <div class="image_container"> 
    
        <img src="${product.image}">
    </div>

    <div class="product_content">
     
    <h1>${product.title}</h1>
   <p>${product.description}</p>
    <button>${product.price}</button>
   
    </div>
</div>`;
    };

    const renderproducts=(products)=>{
     productcontainerEl.innerHTML= "";
        products.forEach((product)=>{
            productcontainerEl.innerHTML += generateproduct(product);
        });
    };
    renderproducts(products);
console.log("fetchproducts", await fetchproducts());
    

})();
