const Address = require("../models").Address;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// exports.getCategories = (req, res, next) => {

// Address.findAll()
//     .then((fetchedCategories) => {
//     res.status(200).json({
//         message: "Categories fetched successfully!",
//         categories: fetchedCategories, 
//     });
//     })
//   .catch(function (error) {
// 		res.status(500).json({
//       message: "Fetching categories failed!"
//     });
// 	});
// };

exports.createAddress = (req, res, next) => {
  const Http = new XMLHttpRequest();
  const url='http://www.mapquestapi.com/geocoding/v1/address?key=fxvCuNIQCRXGAYwnhul8P1Mmfad16tEP&location='+req.body.postalCode;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(Http.responseText);
      let latitude = result.results[0].locations[0].latLng.lat;
      let longitude = result.results[0].locations[0].latLng.lng;
  
      const addressData = {
        civicNumber: req.body.civicNumber,
        apto: req.body.apto,
        streetName: req.body.streetName,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        UserId: req.body.UserId,
        latitude: latitude,
        longitude: longitude
      };
      Address
        .create(addressData)
        .then(createdAddress => {
          res.status(201).json({
            message: "Address added successfully",
            Address: createdAddress
          });
        })
        .catch(error => {
          res.status(500).json({
            message: "Creating an Address failed!",
            error: error
          });
        });
    }
  };
};

exports.updateAddress = (req, res, next) => {
  const Http = new XMLHttpRequest();
  const url='http://www.mapquestapi.com/geocoding/v1/address?key=fxvCuNIQCRXGAYwnhul8P1Mmfad16tEP&location='+req.body.postalCode;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(Http.responseText);
      let latitude = result.results[0].locations[0].latLng.lat;
      let longitude = result.results[0].locations[0].latLng.lng;
  
      const addressData = {
        civicNumber: req.body.civicNumber,
        apto: req.body.apto,
        streetName: req.body.streetName,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        latitude: latitude,
        longitude: longitude
      };
      Address
        .update(addressData, {
              where : {
                UserId: req.body.UserId
              }})
        .then(createdAddress => {
          res.status(201).json({
            message: "Address added successfully",
            Address: createdAddress
          });
        })
        .catch(error => {
          res.status(500).json({
            message: "Creating an Address failed!",
            error: error
          });
        });
    }
  };
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