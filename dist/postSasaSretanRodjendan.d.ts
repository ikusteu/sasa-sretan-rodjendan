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
declare const postSasaSretanRodjendan: PostSasaSretanRodjendan;
export default postSasaSretanRodjendan;
