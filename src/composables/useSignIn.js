import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    return res;
  } catch (err) {
    console.log(err);
    if (err.code == "auth/user-not-found") {
      alert("User not found");
    }
    if (err.code == "auth/wrong-password") {
      alert("Wrong password");
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
