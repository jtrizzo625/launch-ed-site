import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export default function BookPage() {
  redirect(site.calendlyUrl);
}
