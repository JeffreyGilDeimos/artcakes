import { useState, React } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Messages from "./Messages";

export default function Reviews() {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);
  const navigate = useNavigate();
  const [reviews] = useCollection(
    db.collection("messages").orderBy("timestamp", "desc")
  );

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    setInput("");
  };

  const checkUser = () => {
    if (!activeUser.email) {
      navigate("/login");
    }
  };

  return (
    <section id="review">
      <div className="container p-5">
        <div className="pb-md-5">
          <h1 className="fw-bolder m-0 text-uppercase text-center">
            <strong>Reviews</strong>
          </h1>
          <div className="mt-5">
            <form
              onSubmit={sendMessage}
              className="d-md-flex justify-content-center align-items-center"
            >
              <textarea
                name="review-input"
                id="review-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={() => checkUser()}
                placeholder="Write your review here!"
                className="rounded-3"
              ></textarea>
              <button className="submit-review text-decoration-none rounded-3 text-white d-block mx-auto m-md-0 mt-2 mt-md-0 ms-md-4 text-uppercase fw-bold">
                Submit
              </button>
            </form>

            <hr className="my-4 mx-5" />
            <div className="grid-col-span-2">
              <div className="for-grid-review">
                {/* REVIEWS */}

                {reviews?.docs.map((doc) => {
                  const { user, userImage, message, timestamp } = doc.data();
                  return (
                    <Messages
                      key={doc.id}
                      user={user}
                      userImage={userImage}
                      message={message}
                      timestamp={timestamp}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
