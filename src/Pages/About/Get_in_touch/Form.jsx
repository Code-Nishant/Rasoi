import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  //states
  const [isSignIn, setIsSignIn] = useState(true);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  //handler function
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setSubmitted(false); // Reset submitted state when toggling form
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("rating", rating); // Append the rating value to the form data
    const formEndpoint = "https://formspree.io/f/mrgnrgay";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitted(true); // Set submitted state to true
        // Reset form fields and rating after successful submission
        event.target.reset();
        setRating(0);
      } else {
        console.error("Form submission failed:", response.statusText);
        // Optionally, handle the failure scenario
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, handle any network errors
    }
  };

  const handleBackButtonClick = () => {
    setIsSignIn(true); // Set the form back to "Get in Touch" state
    setSubmitted(false); // Reset the submitted state
  };

  return (
    <div className="form-container container">
      <div className={`form-wrapper ${isSignIn ? "sign-in" : "rate-us"}`}>
        <h2>{submitted ? "Team Rasoi" : (isSignIn ? "Get in Touch" : "Rate Us")}</h2>
        {submitted ? (
          <>
            <p>Thank you for your submission!</p>
            <div className="back">
              <button onClick={handleBackButtonClick}>Back</button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Common Fields for Both Forms */}
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="_replyto" placeholder="Email" />
            
            {isSignIn && (
              <>
                {/* Sign In Fields */}
                <input type="text" name="message" placeholder="Message" />
                <div className="buttons">
                  <button type="submit">Send</button>
                  <button type="button" onClick={toggleForm}>
                    Rate Us
                  </button>
                </div>
              </>
            )}

            {!isSignIn && (
              <>
                {/* Rate Us Fields */}
                <input type="text" name="message" placeholder="Review" />
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
        )}
      </div>
    </div>
  );
};

export default Form;
