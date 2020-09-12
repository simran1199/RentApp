const express = require('express')
const x = require('../controllers/seekspace')
const router = express.Router()


router.get('/', x.getallspaces)
router.post('/',x.createPost)
router.get('/:id',x.getsinglespace)
router.put('/:id',x.updatespace)
router.delete('/:id',x.deletespace)



module.exports = router