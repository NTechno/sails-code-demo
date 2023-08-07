/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  renderUser : async function (req, res) {
        return res.render('/pages/user');
  },

  renderSignup: async function (req, res) {
    return res.render('/pages/signup');
  },

  renderSignin: async function (req, res) {
    return res.render('/pages/signin');
  },
  renderContact: async function (req, res) {
    return res.render('/pages/contact');
  },
  getUsers : async function (req, res) {
    console.log("into the get users");
    var data = await User.find().exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },
  getCity : async function (req, res) {
    console.log("into the get users");
    var data = await City.find({}).exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },
  getState : async function (req, res) {
    console.log("into the get users");
    var data = await State.find({}).exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },
  getCountry : async function (req, res) {
    console.log("into the get users");
    var data = await Country.find({}).exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },
  saveCountry : async function (req, res) {
    console.log("into the get users");
    var data = await Country.find({}).exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },
  saveCountry : async function (req, res) {
    console.log("into the get users");
    var data = await Country.create(initialValues).fetch();
    return res.send(data);

  },
  saveCountry : async function (req, res) {
    console.log("into the get users");
    var data = await Country.find({}).exc((user , err)=>{
      console.log("response" , user, err);
      return res.send(user);
    })
  },


};

