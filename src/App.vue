<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view />
</template>

<script>
import { fireStoreCore } from "./configs/firebase.js";
import { getDocs, collection } from "firebase/firestore";

export default {
    setup() {
        // const fetchData = async () => {
        //     try {
        //         const querySnapshot = await getDocs(
        //             collection(fireStoreCore, "transactions")
        //         );
        //         querySnapshot.forEach((doc) => {
        //             console.log(doc.id, " => ", doc.data());
        //         });
        //     } catch (error) {
        //         console.error("Error getting documents:", error);
        //     }
        // };

        // fetchData();

        async function getTransactions() {
            const res = await getDocs(
                collection(fireStoreCore, "transactions")
            );
            const data = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            console.log(data);
        }
        getTransactions();
    },
};
</script>

<style></style>
