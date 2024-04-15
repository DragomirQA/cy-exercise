/// <reference types="cypress"/>}

class ProductPage {

    elements = {
        
        prices : () => cy.get('.price'),
        images : () => cy.get('.product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'),

      
    }


}
module.exports = ProductPage;