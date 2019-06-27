const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const today = new Date();

  const productData = {
    userId: req.userData.userId,
    product_name: req.body.product_name,
    description: req.body.description,
    price: req.body.price,
    imagePath: url + "/images/" + req.file.filename,
    created_at: today
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
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });
  Post.updateOne({ _id: req.params.id, creator: req.userData.userId }, post)
    .then(result => {
      if (result.n > 0) {
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
  let limit = +req.query.pagesize;   // number of records per page
  let offset = 0;
  let count = 0;
  Product.findAndCountAll()
    .then((data) => {
      let page = +req.query.page;      // page number
      
      count = data.count;
      console.log(count);
      // let pages = Math.ceil(data.count / limit);
		  offset = limit * (page - 1);
      Product.findAll({
        // attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
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
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};

exports.deleteProduct = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
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
