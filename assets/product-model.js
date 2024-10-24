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
    const modal = document.getElementById("productModelModal")
    return modal
  }

  openModelModal() {
    const mediaID = this.getMediaID()
    const modal = this.getModal()
    if(!mediaID) return

    const openModalButton = this.querySelector(`button[id="productModalOpenButton_${mediaID}"]`)

    openModalButton.addEventListener('click', function(e){
      modal.querySelector("#body")
    })

  }
}

const productModel = customElements.define('product-model', ProductModel)