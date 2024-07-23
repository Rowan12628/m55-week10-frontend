export const signup = async (user) => {
  const res = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  const data = await res.json();
  console.log(data);
  return data;
};
