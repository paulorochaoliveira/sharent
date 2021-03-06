const ProductEvaluation = require("../models").ProductEvaluation;
const Product = require("../models").Product;
const User = require("../models").User;

exports.createProductEvaluation = (req, res, next) => {
  console.log(req.body.UserId);

  const productEvaluationData = {
    UserId: req.body.UserId,
    ProductId: req.body.ProductId,
    evaluation: req.body.evaluation,
    rate: req.body.rate
  };
  ProductEvaluation
    .create(productEvaluationData)
    .then(createdProduct => {
      res.status(201).json({
        message: "Product Evaluation added successfully",
        productEvaluation: createdProduct
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a product evaluation failed!",
        product: productData, 
        error: error
      });
    });
};

exports.updateProduct = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  const productData = {
    product_name: req.body.product_name,
    description: req.body.description,
    price: req.body.price,
    imagePath: imagePath
  };
  Product.update(productData, {
    where : {
      id: req.body.id
    }})
    .then(result => {
      console.log(result[0]);
      if (result[0] > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate post!"
      });
    });
};

// exports.getProducts = (req, res, next) => {
//   const pageSize = +req.query.pagesize;
//   const currentPage = +req.query.page;
//   const porductQuery = Product.findAll();
//   let fetchedProducts;
//   if (pageSize && currentPage) {
//     porductQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
//   }
//   postQuery
//     .then(documents => {
//       fetchedProducts = documents;
//       return Post.count();
//     })
//     .then(count => {
//       res.status(200).json({
//         message: "Posts fetched successfully!",
//         products: fetchedProducts,
//         maxProducts: count
//       });
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Fetching posts failed!"
//       });
//     });
// };

exports.getProductEvaluations = (req, res, next) => {
//   let limit = +req.query.pagesize;   // number of records per page
//   let offset = 0;
//   let count = 0;
//   Product.findAndCountAll()
//     .then((data) => {
//       let page = +req.query.page;      // page number
      
//       count = data.count;
//       console.log(count);
//       // let pages = Math.ceil(data.count / limit);
// 		  offset = limit * (page - 1);
    Product.findAll({
    // attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
    // limit: limit,
    // offset: offset,
    // $sort: { id: 1 },
    include: [{
        model: User
        },
        {
        model: Product
        }]
    }
    )
    .then((fetchedProducts) => {
        res.status(200).json({
            message: "Product Evaluations fetched successfully!",
            products: fetchedProducts, 
            maxProducts: count
    });
    })
    .catch(function (error) {
            res.status(500).json({
        message: "Fetching product evaluations failed!"
        });
    });
};

exports.getProductsUser = (req, res, next) => {
  let limit = +req.query.pagesize;   // number of records per page
  let offset = 0;
  let count = 0;
  Product.findAndCountAll({
    where: {
      UserId: req.query.UserId
    }})
    .then((data) => {
      let page = +req.query.page;      // page number
      
      count = data.count;
      console.log(count);
      // let pages = Math.ceil(data.count / limit);
		  offset = limit * (page - 1);
      Product.findAll({
        where: {
          UserId: req.query.UserId
        },
        limit: limit,
        offset: offset,
        $sort: { id: 1 }
      })
      .then((fetchedProducts) => {
        res.status(200).json({
          message: "Posts fetched successfully!",
          products: fetchedProducts, 
          maxProducts: count
        });
      });
  })
  .catch(function (error) {
		res.status(500).json({
      message: "Fetching posts failed!"
    });
	});
};



exports.getProduct = (req, res, next) => {
  Product.findAll({
    where: {
      id: req.params.id
    },
    include: [{
      model: User,
      attributes: ['id', 'first_name', 'last_name']
    }]
  })
    .then(product => {
      if (product) {
        // console.log(product.user);
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching product failed!"
      });
    });
};

exports.deleteProduct = (req, res, next) => {
  console.log(req.params.id);
  Product.destroy({
    where : {
      id: req.params.id
    }})
    .then(result => {
      console.log(result);
      if (result > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};
