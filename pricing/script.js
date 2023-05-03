function calculate() {
  const itemPrice = Number(document.getElementById('item-price').value);
  const shippingCost = Number(document.getElementById('shipping-cost').value);
  const itemQuantity = Number(document.getElementById('item-quantity').value);
  const itemCost = Number(document.getElementById('item-cost').value);

  const totalRevenue = (itemPrice + shippingCost) * itemQuantity;
  const ebayFee = totalRevenue * 0.1;
  const paypalFee = (totalRevenue + ebayFee) * 0.029 + 0.3;
  const totalFees = ebayFee + paypalFee + itemCost * itemQuantity;
  const netProfit = totalRevenue - totalFees;

  document.getElementById('total-revenue').value = '$' + totalRevenue.toFixed(2);
  document.getElementById('total-fees').value = '$' + totalFees.toFixed(2);
  document.getElementById('net-profit').value = '$' + netProfit.toFixed(2);
}


  