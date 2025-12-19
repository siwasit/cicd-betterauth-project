"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getAuth } from "@/utils/auth";

export async function signUpAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    const auth = getAuth();

    await auth.api.signUpEmail({
        body: { email, password, name }
    })

    // redirect("/");
    return { success: true };
}

export async function signInAction(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const auth = getAuth();

    await auth.api.signInEmail({
        body: { email, password }
    })

    // redirect("/");
    return { success: true };
}

export async function signOutAction() {

    const auth = getAuth();

    await auth.api.signOut({
        headers: await headers()
    })

    // redirect("/");
    return { success: true };
}