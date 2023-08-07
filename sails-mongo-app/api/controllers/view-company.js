module.exports = {


  friendlyName: 'View company',


  description: 'Display "Company" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/company'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
