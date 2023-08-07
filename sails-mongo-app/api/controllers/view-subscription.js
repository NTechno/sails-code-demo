module.exports = {


  friendlyName: 'View subscription',


  description: 'Display "Subscription" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/subscription'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
