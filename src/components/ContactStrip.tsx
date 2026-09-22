import { MapPin, Phone, Mail } from 'lucide-react';

const ContactStrip = () => {
    return (
        <section className="px-4 py-8 lg:px-8 bg-slate-50 flex justify-center pb-24">
            <div className="w-full max-w-[1200px] bg-[#1c1c1c] ] text-white py-12 px-8 shadow-2xl rounded relative z-10 -mt-16 md:-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">

                    {/* Address */}
                    <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
                        <MapPin size={24} className="text-primary mb-4" />
                        <h4 className="font-bold text-lg mb-3">Address (HQ)</h4>
                        <p className="text-sm text-slate-300">
                            4 Uwanse Close, Calabar South, Nigeria.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
                        <Phone size={24} className="text-primary mb-4" />
                        <h4 className="font-bold text-lg mb-3">Phone Number</h4>
                        <p className="text-sm text-slate-300 flex flex-col gap-1">
                            <span>+234 816 000 0000</span>
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
                        <Mail size={24} className="text-primary mb-4" />
                        <h4 className="font-bold text-lg mb-3">Email Address</h4>
                        <p className="text-sm text-slate-300 flex flex-col gap-1">
                            <span>ncgos01@gmail.com</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactStrip;

