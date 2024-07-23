const signup = async (username, email, password) => {
  const res = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};

module.exports = { signup };
