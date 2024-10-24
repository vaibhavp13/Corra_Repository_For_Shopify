class ProductModel extends HTMLElement {
  constructor() {
    super()
    this.openModelModal()
  }

  getMediaID(){
    this.mediaID
  }

  getModal(){

  }

  openModelModal() {
    const mediaID = this.getMediaID()
    const modal = this.getModal()
  }
}

const productModel = customElements.define('product-model', ProductModel)