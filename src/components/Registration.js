import React from 'react';

const Registration = () => {
  return (
    <div>
      <form>
        <h2>Create Account</h2>

        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <img src="../assets/logo.png" alt="Where-to-code" />
      </div>
    </div>
  );
};

export default Registration;
