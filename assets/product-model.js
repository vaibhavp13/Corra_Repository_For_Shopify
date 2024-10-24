class ProductModel extends HTMLElement {
  constructor() {
    super()
    this.openModelModal()
  }

  getMediaID(){
    this.mediaID = this.getAttribute('data-media-id')
    return
  }

  getModal(){

  }

  openModelModal() {
    const mediaID = this.getMediaID()
    const modal = this.getModal()
  }
}

const productModel = customElements.define('product-model', ProductModel)