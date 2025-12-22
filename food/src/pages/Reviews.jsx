import { useState, useEffect } from "react";
import axios from "axios";
import "./Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/reviews", formData);
      setReviews([res.data, ...reviews]); 
      setFormData({ name: "", rating: "", comment: "" }); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section reviews" id="reviews">
      <h2>Write a review&#128395;</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />
        <textarea
          name="comment"
          placeholder="Your Review"
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" >Submit Review</button>
      </form>
      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review._id}>
            <p>{"⭐".repeat(review.rating)}</p>
            <p>"{review.comment}"</p>
            <span>- {review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
