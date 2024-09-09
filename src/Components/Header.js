import React, { useEffect } from "react";
import logo from "../Images/logo.png";
import { auth } from "../Utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { toggleGpt } from "../Utils/GptSlice";
import { LANGUAGE_CONSTANT } from "../Utils/Constants";
import { changeLanguage } from "../Utils/Config";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const ShowLangSelector = useSelector((store) => store.Gpt.showGptSearch);

  const SignOutHandeler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubcribe();
  }, []);

  const GptHandelClicked = () => {
    dispatch(toggleGpt());
  };

  const LangChangeHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex absolute bg-gradient-to-b z-10 w-full justify-between pr-5 flex-col md:flex-row  ">
      <img alt="logo" src={logo} className="w-48" />

      {user && (
        <div className="flex py-2">
          {ShowLangSelector && (
            <select
              className="bg-slate-800 text-white px-6 mx-2 rounded-lg hover:bg-slate-600"
              onChange={LangChangeHandler}
            >
              {LANGUAGE_CONSTANT.map((lang) => (
                <option key={lang.identifiyer} value={lang.identifiyer}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <img
            className="w-14 p-2 rounded-full"
            alt="UserPic"
            src={user?.photoURL}
          />
          <button
            className="px-1 py-1 mr-2 font-bold bg-red-700 text-white rounded-lg hover:bg-red-800"
            onClick={SignOutHandeler}
          >
            Log Out
          </button>
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white p-4 mx-2 rounded-lg"
            onClick={GptHandelClicked}
          >
            {ShowLangSelector ? "Home Page" : "GPT Search"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
