var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:version', function(req, res, next) {
	fs.readFile('./play_list/' + req.params.version + '.xml' , 'utf8', function (err,data) {
  		if (err) {
    		return console.log(err);
  		}
  		console.log(data);
  		res.set('Content-Type', 'text/xml')
  		res.send(data);
  		res.end();
	});
});

module.exports = router;
