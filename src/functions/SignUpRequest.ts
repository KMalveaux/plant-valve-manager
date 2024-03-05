// Third Party Library Imports
import axios from "axios";

const serverUrl = "http://localhost:3000";
const bcrypt = require("bcryptjs");

/**
 * Performs user signup.
 * 
 * @param username - The username for the new user.
 * @param password - The password for the new user.
 * @returns A Promise that resolves when the signup process is complete.
 */
export const signUp = async (username: string, password: string) => {
  if (username === "") {
    console.error("Username cannot be blank.");
    return;
  } else if (password === "") {
    console.error("Password cannot be blank.");
    return;
  }

  const hashedPassword = await hashPassword(password);
  const signUpForm = new FormData();
  signUpForm.append("username", username);
  signUpForm.append("passwordHash", hashedPassword);

  axios
    .post(`${serverUrl}/authenticate`, signUpForm, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

/**
 * Hashes a password using bcrypt.
 * 
 * @param password - The password to be hashed.
 * @returns A Promise that resolves to the hashed password.
 */
async function hashPassword(password: string) {
  const saltRounds = 0;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
