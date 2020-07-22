module.exports = {
  attributes: {
    titre: {
      type: "string",
      columnType: "varchar",
      maxLength: 45,
    },
    resume: {
      type: "string",
      columnType: "varchar",
      maxLength: 500,
    },
    realisateur: {
      type: "string",
      columnType: "varchar",
      maxLength: 45,
    },
  },
};
