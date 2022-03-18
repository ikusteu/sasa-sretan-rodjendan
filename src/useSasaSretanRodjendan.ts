import { getFirestore, onSnapshot, collection } from "@firebase/firestore";
import { useState } from "react";

import { __sretanCollection__ } from "./lib/constants";
import { CongratulationsCard } from "./lib/types";

const testState = [
  {
    title: "Hello world",
    message: "Lorem ipsum",
    timestamp: "2022-03-18T16:34:000",
  },
  {
    title: "Ivan Kušt",
    message: "Ne znam Sašu, ali čujem dobar čovjek skroz.",
    timestamp: "2022-03-18T16:20:000",
  },
];

/**
 * A convenience hook used to subscribe to "sasa-sretan-rodjendan" collection
 * in firestore and update the result on each firestore update
 * @returns an array of "sretan rodjendan" cards sorted by timestamp
 */
const useSasaSretanRodjendan = (): CongratulationsCard[] => {
  // state containing all "sasa sretan rodjendan" cards
  const [cards, setCards] = useState<CongratulationsCard[]>(testState);

  // reference to `sasa-sretan-rodjendan` collection in firestore db
  const sretanRef = collection(getFirestore(), __sretanCollection__);

  // on each new "sretan rodjendan" this will get updated in firestore
  // and the updates will get sent back to client through this subscription
  onSnapshot(sretanRef, (collRef) => {
    const orderedDocs = collRef.docs
      .map((docRef) => docRef.data())
      .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));
    setCards(orderedDocs as CongratulationsCard[]);
  });

  return cards;
};

export default useSasaSretanRodjendan;
