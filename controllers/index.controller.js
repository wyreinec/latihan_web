module.exports = {
  index: async (req, res) => {
    const name = 'Mari';
    return res.render('index', { name });
  },
};
