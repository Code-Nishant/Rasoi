import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [rating, setRating] = useState(0);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log("Rating submitted:", rating);
    // For demo purposes, let's reset the rating
    setRating(0);
  };

  return (
    <div className="form-container">
      <div className={`form-wrapper ${isSignIn ? "sign-in" : "rate-us"}`}>
        <h2>{isSignIn ? "Get in Touch" : "Rate Us"}</h2>
        <form onSubmit={handleSubmit}>
          {/* Sign In Fields */}
          {isSignIn && (
            <>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="message" placeholder="Message" />
              <button type="submit">Send</button>
              <button type="button" onClick={toggleForm}>
                Rate Us
              </button>
            </>
          )}

          {/* Rate Us Fields */}
          {!isSignIn && (
            <>
              {/* <p>How would you rate us?</p> */}

              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="message" placeholder="Review" />
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? "active" : ""}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={toggleForm}>
                  Get in Touch
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
