module.exports = {


  friendlyName: 'View employee',


  description: 'Display "Employee" page.',  


  exits: {

    success: {
      viewTemplatePath: 'pages/employee'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
