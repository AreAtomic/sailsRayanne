module.exports = {
  friendlyName: "Inspect",

  description: "Permet l'affichage des films",

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "films",
    },
  },

  fn: function (req, res) {
    Film.find().exec(function (err, films) {
      // All done.
      if (err) {
        return res.send(err);
      }
      return { films: films };
    });
  },
};
