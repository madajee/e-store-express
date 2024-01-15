
module.exports = {
    register: (req, res) => {
      const payload = req.body;
      console.log("payload in register:");
      console.log(payload);
      return res.status(200).json({
        status: false
      });
      
    },
    login: (req, res) => {
        const { username, password } = req.body;
        console.log("payload in login:");
        console.log(username);
    }
}