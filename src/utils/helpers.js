export const changeHandler = (event, setter) => {
  setter(event.target.value);
};

export const logOrSignSets = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogged, setUserLogged] = useState(null);
};
