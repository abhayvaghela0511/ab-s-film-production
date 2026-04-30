"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, use an Env variable for the password
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            localStorage.setItem("admin_session", "active");
            router.push("/admin/dashboard");
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <form onSubmit={handleLogin} className="bg-zinc-900 p-10 rounded-3xl border border-white/10 w-full max-w-md">
                <h1 className="text-yellow-500 font-serif text-3xl mb-8 uppercase tracking-widest text-center">Admin Access</h1>
                <input
                    type="password"
                    placeholder="Enter Admin Password"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white mb-6 outline-none focus:border-yellow-500 transition-all"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all">
                    ENTER DASHBOARD
                </button>
            </form>
        </div>
    );
}