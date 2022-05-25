const { response } = require("express");
const Product = require("../models/product");



const getWines = async( req, res = response )  =>{

    const { limit = 10 , start = 0 } = req.query;
    const query = { state: true  };

    const [total, products] = await Promise.all([
      Product.countDocuments(query),
      Product.find(query).skip(Number(start)).limit(Number(limit)),
    ]);


    res.json({
      total,
      products
    });

}





const postProduct = async (req, res = response) => {
  const { state, name, ...body } = req.body;

  const productDB = await Product.findOne({ name });

  if (productDB) {
    return res.status(400).json({
      msg: `The product:  ${name} already exist`,
    });
  }

  const data = {
    ...body,
    name,
  };
  const product = new Product(data);

  await product.save();

  res.status(201).json(product);
};

//---------------------------------
const getWinesABC = async( req, res = response )  =>{

  const { limit = 10 , start = 0 } = req.query;
  const query = { state: true  };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).skip(Number(start)).limit(Number(limit)),
  ]);

  let sortAbc = products.sort(function(a,b){
    if(a.name.toLowerCase() > b.name.toLowerCase()){
      return 1;
  }
  if(b.name.toLowerCase() > a.name.toLowerCase()){
      return -1
  }
  return 0
})


  res.json({
    total,
    sortAbc
  });

}
const getWinesCBA = async( req, res = response )  =>{

  const { limit = 10 , start = 0 } = req.query;
  const query = { state: true  };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).skip(Number(start)).limit(Number(limit)),
  ]);

  let sortAbc = products.sort(function(a,b){
    if(b.name.toLowerCase() > a.name.toLowerCase()){
      return 1;
  }
  if(a.name.toLowerCase() > b.name.toLowerCase()){
      return -1
  }
  return 0
})


  res.json({
    total,
    sortAbc
  });

}

const getWineshigherprice = async( req, res = response )  =>{

  const { limit = 10 , start = 0 } = req.query;
  const query = { state: true  };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).skip(Number(start)).limit(Number(limit)),
  ]);

  let sortAbc = products.sort(function(a,b){
    if(b.price > a.price){
      return 1;
  }
  if(a.price > b.price){
      return -1
  }
  return 0
})


  res.json({
    total,
    sortAbc
  });

}
const getWineslowerprice = async( req, res = response )  =>{

  const { limit = 10 , start = 0 } = req.query;
  const query = { state: true  };

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).skip(Number(start)).limit(Number(limit)),
  ]);

  let sortAbc = products.sort(function(a,b){
    if(a.price > b.price){
      return 1;
  }
  if(b.price > a.price){
      return -1
  }
  return 0
})


  res.json({
    total,
    sortAbc
  });

}



module.exports = {
  postProduct,
  getWines,
  getWinesABC,
  getWinesCBA,
  getWineshigherprice,
  getWineslowerprice
};
