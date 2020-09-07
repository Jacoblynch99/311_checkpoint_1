const data = require('../data/index')
const sampleData = require("../data/sampleUser")
const { use } = require('../routes/user')
let counter = data.length + 1

const allUsers = (req, res) => {
  if ("You ain't a hacker.") {
    return res.json(data)
  }
}

const oneUser = (req, res) => {
  let foundUser = data.find(data =>data.id === parseInt(req.params.id))
  if (foundUser.isActive === false) {
    res.status(404).json({message: `User with the id of ${req.params.id} is no longer active.`})
  } else {
    res.json(foundUser)
  }
}

const updateUser = (req, res) => {
  let foundUser = (data.filter( data => data.id === parseInt(req.params.id)))
  let user = foundUser[0]
  if (foundUser.isActive === false) {
    res.status(400).json({ message: `User with the id of ${req.params.id} is no longer active.`})
  } else {
    user.name = req.body.name ? req.body.name : user.name
    user.username = req.body.username ? req.body.username : user.username
    user.email = req.body.email ? req.body.email : user.email
    user.address.street = req.body.address.street ? req.body.address.street : user.address.street
    user.address.suite = req.body.address.suite ? req.body.address.suite : user.address.suite
    user.address.city = req.body.address.city ? req.body.address.city : user.address.city
    user.address.zipcode = req.body.address.zipcode ? req.body.address.zipcode : user.address.zipcode
    user.address.geo.lat = req.body.address.geo.lat ? req.body.address.geo.lat : user.address.geo.lat
    user.address.geo.lng = req.body.address.geo.lng ? req.body.address.geo.lng : user.address.geo.lng
    user.phone = req.body.phone ? req.body.phone : user.phone
    user.website = req.body.website ? req.body.website : user.website
    user.company.name = req.body.company.name ? req.body.company.name : user.company.name
    user.company.catchPhrase = req.body.company.catchPhrase ? req.body.company.catchPhrase : user.company.catchPhrase
    user.company.bs = req.body.company.bs ? req.body.company.bs : user.company.bs
    res.json(user)
  }
}

const createUser = (req, res) => {
  if (sampleData.isActive === true) {
    res.status(400).json({ message: `User with the id of ${sampleData.id} already exists.`})
  } else {
    sampleData.id = counter++
    sampleData.isActive = true
    data.push(sampleData)
    res.json(data[data.length -1])
  }
}

const deleteUser = (req, res) => {
  let foundUser = (data.filter( data => data.id === parseInt(req.params.id)))
  let user = foundUser[0]
  if (user.isActive === false) {
    res.status(400).json({ message: `User with the id of ${user.id} does not exist.`})
  } else {
    user.isActive = false
    res.json(foundUser)
  }
}

module.exports = {
  allUsers,
  oneUser,
  updateUser,
  createUser,
  deleteUser
}