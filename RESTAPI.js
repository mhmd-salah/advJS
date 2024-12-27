const login = async () => {
  const res = await fetch("http://localhost:1337/api/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "admin",
      email: "admin@example.com",
      password: "admin123dsfsadfasdf",
    }),
  });
  console.log(res);
};
login();
