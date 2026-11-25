import { redirect } from "next/navigation";
import { RECOMMEND_PLACE_PATH } from "@/lib/recommend";

export default function SharePlaceRedirect() {
  redirect(RECOMMEND_PLACE_PATH);
}
