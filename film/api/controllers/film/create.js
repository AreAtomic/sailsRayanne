module.exports = {
    friendlyName: "Create",
  
    description: "Creation film.",
  
    exits: {
      redirect: {
        description: "Nouveau film dans la liste",
        responseType: "redirect",
      },
    },
  
    fn: async function () {
      //this.req.body,
      await Film.create({
        titre: this.req.body.titre,
        resume: this.req.body.resume,
        realisateur: this.req.body.realisateur,
      });
      // Redirect to cas list.
      throw { redirect: "/film" };
    },
  };