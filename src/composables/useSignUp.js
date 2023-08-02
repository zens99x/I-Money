import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) throw new Error("Couldn't create a new user.");

    await res.user.updateProfile({ displayName: fullName });
    console.log(res);

    return res;
  } catch (err) {
    if (err.code == "auth/email-already-in-use") {
      alert("The email address is already in use");
    } else if (err.code == "auth/invalid-email") {
      alert("The email address is not valid.");
    } else if (err.code == "auth/operation-not-allowed") {
      alert("Operation not allowed.");
    } else if (err.code == "auth/weak-password") {
      alert("The password is too weak.");
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
