var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json({message: "success"});
  Contact.find()
          .exec(function (err, contacts) {
              if (err) {
                  return res.status(500).json({
                      title: 'An error occurred',
                      error: err
                  });
              }
              res.status(200).json({
                  message: 'Success',
                  obj: contacts
              });
          });
});

router.post('/addContact', function(req, res, next) {  
  var contact = new Contact({
      fullName: req.body.fullName,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      state: 1
  });
  contact.save(function (err, result) {
      if (err) {
          return res.status(500).json({
              title: 'An error occurred',
              error: err
          });
      }
      res.json({
          contact: 'Saved Contact',
          obj: result
      });
  });
});

router.patch('/deleteContact/:contactId', function (req, res, next) {
  var contactToUpdate = (!req.files) ? req.body : JSON.parse(req.body);
  var id = parseInt(req.params.contactId);
  contactToUpdate.state = 0;
  Contact.update({ contactId: id }, contactToUpdate, {}, function (err, updatedContact) {
        if (!err) {
            console.log(`Contact deleted successfully`);
        }
        res.json(
          { 
            message: "Success", 
            status: 200
          }
        )
    });
    
});

module.exports = router;
