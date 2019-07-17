const Category = require("../models").Category;


exports.getCategories = (req, res, next) => {

Category.findAll()
    .then((fetchedCategories) => {
    res.status(200).json({
        message: "Categories fetched successfully!",
        categories: fetchedCategories, 
    });
    })
  .catch(function (error) {
		res.status(500).json({
      message: "Fetching categories failed!"
    });
	});
};

exports.createCategory = (req, res, next) => {
    const categoryData = {
      name: req.body.name
    };
    Category
      .create(categoryData)
      .then(createdCategory => {
        res.status(201).json({
          message: "Category added successfully",
          category: createdCategory
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Creating a category failed!",
          error: error
        });
      });
  };

// exports.getCategory = (req, res, next) => {
//     Product.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [{
//         model: User,
//         attributes: ['id', 'first_name', 'last_name']
//       }, {
//         model: ProductEvaluation,
//         include: [{
//           model: User,
//           attributes: ['id', 'first_name', 'last_name'],
//         }]
//       }]
//     })
//       .then(product => {
//         if (product) {
//           res.status(200).json(product);
//         } else {
//           res.status(404).json({ message: "Product not found!" });
//         }
//       })
//       .catch(error => {
//         res.status(500).json({
//           message: "Fetching product failed!"
//         });
//       });
//   };

// exports.getProductsUser = (req, res, next) => {
//   let limit = +req.query.pagesize;   // number of records per page
//   let offset = 0;
//   let count = 0;
//   Product.findAndCountAll({
//     where: {
//       UserId: req.query.UserId
//     }})
//     .then((data) => {
//       let page = +req.query.page;      // page number
      
//       count = data.count;
//       console.log(count);
//       // let pages = Math.ceil(data.count / limit);
// 		  offset = limit * (page - 1);
//       Product.findAll({
//         where: {
//           UserId: req.query.UserId
//         },
//         limit: limit,
//         offset: offset,
//         $sort: { id: 1 }
//       })
//       .then((fetchedProducts) => {
//         res.status(200).json({
//           message: "Posts fetched successfully!",
//           products: fetchedProducts, 
//           maxProducts: count
//         });
//       });
//   })
//   .catch(function (error) {
// 		res.status(500).json({
//       message: "Fetching posts failed!"
//     });
// 	});
// };

// exports.deleteProduct = (req, res, next) => {
//   console.log(req.params.id);
//   Product.destroy({
//     where : {
//       id: req.params.id
//     }})
//     .then(result => {
//       console.log(result);
//       if (result > 0) {
//         res.status(200).json({ message: "Deletion successful!" });
//       } else {
//         res.status(401).json({ message: "Not authorized!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Deleting posts failed!"
//       });
//     });
// };

// exports.createProduct = (req, res, next) => {
//   const url = req.protocol + "://" + req.get("host");
//   console.log(req.body.UserId);



// exports.updateProduct = (req, res, next) => {
//   let imagePath = req.body.imagePath;
//   if (req.file) {
//     const url = req.protocol + "://" + req.get("host");
//     imagePath = url + "/images/" + req.file.filename;
//   }
//   const productData = {
//     product_name: req.body.product_name,
//     description: req.body.description,
//     price: req.body.price,
//     imagePath: imagePath
//   };
//   Product.update(productData, {
//     where : {
//       id: req.body.id
//     }})
//     .then(result => {
//       console.log(result[0]);
//       if (result[0] > 0) {
//         res.status(200).json({ message: "Update successful!" });
//       } else {
//         res.status(401).json({ message: "Not authorized!" });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: "Couldn't udpate post!"
//       });
//     });
// };