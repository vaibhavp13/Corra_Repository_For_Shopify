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

  }

  openModelModal() {
    const mediaID = this.getMediaID()
    const modal = this.getModal()
    console.log(mediaID)
  }
}

const productModel = customElements.define('product-model', ProductModel)