class ProductModel extends HTMLElement {
  constructor() {
    super()
    this.openModelModal()
  }
  openModelModal() {
    console.log("the element")
  }
}

const productModel = customElements.define('product-model', ProductModel)