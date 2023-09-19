import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteContact } from "../data";

export const action: ActionFunction = async ({params, request}) => {
  invariant(params.contactId, "Missing contactId param");
    await deleteContact(params.contactId)
    return redirect("/")
}