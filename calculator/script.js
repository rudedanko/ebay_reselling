function calculate() {
    var cost = parseFloat(document.getElementById("cost").value);
    var price = parseFloat(document.getElementById("price").value);
    var shipping = parseFloat(document.getElementById("shipping").value);
    var category = document.getElementById("category").value;
    
    var ebayFeePercentage;
    switch (category) {
      case "electronics":
        ebayFeePercentage = 0.1;
        break;
      case "clothing":
        ebayFeePercentage = 0.15;
        break;
      case "home-garden":
        ebayFeePercentage = 0.12;
        break;
      case "collectibles":
        ebayFeePercentage = 0.05;
        break;
      case "sports":
        ebayFeePercentage = 0.1;
        break;
      default:
        ebayFeePercentage = 0.1;
    }
    
    var ebayFee = ebayFeePercentage * price;
    var profit = price - cost - shipping - ebayFee;
    
    document.getElementById("profit").innerHTML = "$" + profit.toFixed(2);
  }
  