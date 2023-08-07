module.exports = {


  friendlyName: 'View payment',


  description: 'Display "Payment" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/view-payment'
    }

  },


  fn: async function () {
console.log("render page")
    // Respond with view.
    return {};

  }


};
