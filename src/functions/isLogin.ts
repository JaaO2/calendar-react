const isLogin : () => Promise<any> = async () => {
    return await fetch(`http://localhost:3001/user/islogin`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));
  }

  export default isLogin;