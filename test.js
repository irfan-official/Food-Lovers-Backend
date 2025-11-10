const sendData = {
  email: "useremail@mail",
};
fetch("http://url", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(sendData),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

if (user?.email) {
  fetch(`http://ccmr/bids?email-${user.email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token") || user.accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

const verifyJWTToken = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  next();
};

jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  next();
});
