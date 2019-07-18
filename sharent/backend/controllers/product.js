const Sequelize = require('sequelize');
const Product = require("../models").Product;
const User = require("../models").User;
const Category = require("../models").Category;
const ProductEvaluation = require("../models").ProductEvaluation;

const Op = Sequelize.Op;

exports.createProduct = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(req.body.UserId);

  const productData = {
    UserId: req.body.UserId,
    product_name: req.body.product_name,
    CategoryId: req.body.CategoryId,
    description: req.body.description,
    price: req.body.price,
    imagePath: url + "/images/" + req.file.filename
  };
  Product
    .create(productData)
    .then(createdProduct => {
      res.status(201).json({
        message: "Post added successfully",
        product: createdProduct
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed!",
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

exports.getProducts = (req, res, next) => {

  var whereStatement = {};
  
  if(req.query.name && req.query.name != 'null') {
    whereStatement = {
      [Op.or]: [
        {
          product_name: {
            [Op.like]: '%' + req.query.name + '%'
          }
        },
        {
          description: {
            [Op.like]: '%' + req.query.name + '%'
          }
        }
      ]
    }
  }
      
  if(req.query.category && req.query.category != 'all' && req.query.category != 'undefined') {
    whereStatement.CategoryId = req.query.category;
  }

  console.log(whereStatement);
      
  let limit = +req.query.pagesize;   // number of records per page
  let offset = 0;
  let count = 0;
  Product.findAndCountAll({where: whereStatement})
    .then((data) => {
      let page = +req.query.page;      // page number
      
      count = data.count;
      // let pages = Math.ceil(data.count / limit);
		  offset = limit * (page - 1);
      
      Product.findAll({
        // attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
        limit: limit,
        offset: offset,
        $sort: { id: 1 },
        include: [{
            model: User
          }, {
            model: Category
          }],
          where: whereStatement
        }
      )
      .then((fetchedProducts) => {
        // console.log(fetchedProducts);
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
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: User,
      attributes: ['id', 'first_name', 'last_name', 'imagePath']
    },
    { model: Category},
    {
      model: ProductEvaluation,
      include: [{
        model: User,
        attributes: ['id', 'first_name', 'last_name', 'imagePath'],
      }]
    }]
  })
    .then(product => {
      if (product) {
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
