/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const productId = e.record.get("product_id");
  const productType = e.record.get("product_type");
  
  if (!productId || !productType) {
    e.next();
    return;
  }
  
  try {
    const product = $app.findRecordById(productType, productId);
    if (product) {
      const currentCount = product.get("downloads_count") || 0;
      product.set("downloads_count", currentCount + 1);
      $app.save(product);
    }
  } catch (err) {
    console.log("Error updating downloads count: " + err.message);
  }
  
  e.next();
}, "downloads");