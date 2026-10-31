import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="TiluOpat — Masuk" />
            <div className="min-h-screen bg-[#F5F3EF] flex items-center justify-center relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] px-4">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DDD6FE] rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FCE7F3] rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="w-full max-w-md bg-[#F8FAFF]/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-[#E8E9F4] relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-[#E8E9F4] text-xl">🌸</div>
                    </div>
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-extrabold text-[#252943] mb-1">Halo, Selamat Datang Kembali</h1>
                        <p className="text-xs text-[#626477]">Selamat datang kembali, silakan masuk.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-[#252943] mb-1.5">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="User@example.com"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E9F4] text-xs text-[#252943] focus:ring-2 focus:ring-[#7778E8] shadow-sm"
                                required
                            />
                            {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#252943] mb-1.5">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8E9F4] text-xs text-[#252943] focus:ring-2 focus:ring-[#7778E8] shadow-sm"
                                required
                            />
                            {errors.password && <span className="text-[10px] text-red-500 mt-1 block">{errors.password}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 rounded-xl bg-[#252943] text-white text-xs font-bold shadow-md hover:bg-[#7778E8] transition flex items-center justify-center"
                        >
                            Masuk
                        </button>

                        <div className="text-center pt-2 text-xs text-[#626477] flex items-center justify-center space-x-1">
                            <span>Belum punya akun?</span>
                            <Link href={route('register')} className="text-[#7778E8] font-bold hover:underline">
                                Daftar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}