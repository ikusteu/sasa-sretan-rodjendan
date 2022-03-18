import { CongratulationsCard } from "./lib/types";
/**
 * A convenience hook used to subscribe to "sasa-sretan-rodjendan" collection
 * in firestore and update the result on each firestore update
 * @returns an array of "sretan rodjendan" cards sorted by timestamp
 */
declare const useSasaSretanRodjendan: () => CongratulationsCard[];
export default useSasaSretanRodjendan;
