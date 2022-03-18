import { getApp } from "@firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";

import { __sretanCollection__ } from "./lib/constants";
import { CongratulationsCard } from "./lib/types";

interface PostSasaSretanRodjendan {
  (rawCard: Omit<CongratulationsCard, "timestamp">): Promise<{
    success: boolean;
  }>;
}

/**
 * A convenience function used to congradulate "rodjendan" to Saša by storing a new
 * congradulations card to the firestore.
 * @param rawCard congradulations card containing `title` and `message`, without `timestamp` (as timestamp is assigned automatically)
 * @returns `{success: true}` object if successful, `{success: false}` otherwise
 */
const postSasaSretanRodjendan: PostSasaSretanRodjendan = async (rawCard) => {
  const sretanRef = collection(
    getFirestore(getApp(__sretanCollection__)),
    __sretanCollection__
  );

  const timestamp = Date.now().toString();
  const card = { ...rawCard, timestamp };

  try {
    // add new "sretan rodjendan" to firestore
    await addDoc(sretanRef, card);
    // return success result
    return { success: true };
  } catch {
    // if by an off chance the request fails, return `success: false` result
    return { success: false };
  }
};

export default postSasaSretanRodjendan;
