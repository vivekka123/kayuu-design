 import React, { useState } from 'react';

 const Star = (props) => {
  const {starId, rating, onMouseEnter, onMouseLeave, onClick} = props
  let styleClass = 'star-rating-blank'
  if (rating > starId){
    styleClass = 'star-rating-filled'
  }
  console.log('gelen rating to start component: ', rating)
  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
}


function StarRating() {
  // using hooks 
  const [rating, setRating] = useState(0)
  const [hoverState, setHoverState] = useState(0)
  // using 5 stars rating
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stars Rating</h1>
        <div className="flex-container">
          {
            stars.map((star, i) => (
              <Star
                key={i}
                starId={i}
                rating={hoverState || rating} 
                onMouseEnter={() => setHoverState(i+1)}
                onMouseLeave={() => setHoverState(0)}
                onClick={() => setRating(i+1)}
              />
            ))
          }
        </div>
      </header>
    </div>
  );
}
export default StarRating

// const FormValidationExample = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     checkbox: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: newValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm(formData);
//     if (Object.keys(errors).length === 0) {
//       // Form is valid, proceed with submission
//       console.log('Form is valid:', formData);
//     } else {
//       // Form is not valid, display errors
//       setErrors(errors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};

//     if (!data.name.trim()) {
//       errors.name = 'Name is required';
//     }

//     if (!data.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!isValidEmail(data.email)) {
//       errors.email = 'Invalid email format';
//     }

//     if (!data.message.trim()) {
//       errors.message = 'Message is required';
//     }

//     if (!data.checkbox) {
//       errors.checkbox = 'Please accept terms';
//     }

//     return errors;
//   };

//   const isValidEmail = (email) => {
//     // Basic email validation
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <span>{errors.name}</span>}
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span>{errors.email}</span>}
//         </label>
//       </div>
//       <div>
//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           {errors.message && <span>{errors.message}</span>}
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="checkbox"
//             checked={formData.checkbox}
//             onChange={handleChange}
//           />
//           Accept Terms and Conditions
//         </label>
//         {errors.checkbox && <span>{errors.checkbox}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormValidationExample;
