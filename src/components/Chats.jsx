import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

function Chats() {

  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      if (currentUser.uid === undefined) return;
      console.log(currentUser.uid)
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    getChats();
    // currentUser.uid && getChats();
  }, [currentUser.uid]);
  return (
    <div className="chats">
      {/* {Object.entries(chats)?.map(chat => (

        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Chats