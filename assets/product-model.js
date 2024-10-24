class ProductModel extends HTMLElement {
  constructor() {
    super()
    this.openModelModal()
  }

  getMediaID(){
    const id = this.getAttribute('data-media-id')
    return id
  }

  getModal(){
    const modal = document.getElementById("productM")
  }

  openModelModal() {
    const mediaID = this.getMediaID()
    const modal = this.getModal()
    console.log(mediaID)
  }
}

const productModel = customElements.define('product-model', ProductModel)