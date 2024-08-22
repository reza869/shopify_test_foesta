class CompareProduct extends HTMLElement {
  constructor() {
    super();
    this.LOCAL_STORAGE_COMPARE_KEY = "shopify-compare";
    this.LOCAL_STORAGE_DELIMITER = ",";
    this.BUTTON_ACTIVE_CLASS = "active";
    this.onAddActiveClass();
    this.CompareItemCounter();
  }

  getCompare() { 
    let Compare = localStorage.getItem("shopify-compare") || false;
    if (Compare) return Compare.split(",");
    return [];
  }
  
  let getCompareData = this.getCompare();  
  getCompareData.map((handle) => {
    let productTileTemplateUrl = "/products/" + handle + "?view=compare";
    async function fetchCompare(url) {
      const response = await fetch(url);
      const text = await response.text();
      console.log(text);
    }
    fetchCompare(productTileTemplateUrl);
  });
}
customElements.define("compare-item", CompareProduct);
