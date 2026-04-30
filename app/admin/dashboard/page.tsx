"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import { Plus, Image as ImageIcon, Video, LogOut } from "lucide-react";

export default function AdminDashboard() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const session = localStorage.getItem("admin_session");
        if (!session) router.push("/admin/login");
        setIsMounted(true);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_session");
        router.push("/admin/login");
    };

    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-serif font-bold uppercase tracking-tight">
                        Media <span className="text-yellow-500">Manager</span>
                    </h1>
                    <button onClick={handleLogout} className="text-gray-500 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest transition-colors">
                        Logout <LogOut size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Upload Card */}
                    <CldUploadWidget
                        uploadPreset="abs_film_uploads" // Create this in Cloudinary Settings -> Upload
                        onSuccess={(result: any) => {
                            console.log("Uploaded Public ID:", result.info.public_id);
                            alert("Asset Uploaded! Now add it to your projects array/DB.");
                        }}
                    >
                        {({ open }) => (
                            <button
                                onClick={() => open()}
                                className="group h-[300px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-yellow-500/50 hover:bg-white/[0.02] transition-all"
                            >
                                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Plus className="text-yellow-500" size={32} />
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg uppercase tracking-widest">Upload New Content</p>
                                    <p className="text-gray-500 text-sm mt-1">Photos or Reels (Max 100MB)</p>
                                </div>
                            </button>
                        )}
                    </CldUploadWidget>

                    {/* Quick Stats Card */}
                    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                <span className="text-gray-400 text-xs uppercase tracking-widest">Active Portfolio</span>
                                <span className="text-yellow-500 font-bold">12 Assets</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                <span className="text-gray-400 text-xs uppercase tracking-widest">Storage Status</span>
                                <span className="text-green-500 font-bold">Healthy</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-600 leading-relaxed uppercase tracking-tighter">
                            Tip: Ensure reels are uploaded in 9:16 aspect ratio for the best vertical look.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}