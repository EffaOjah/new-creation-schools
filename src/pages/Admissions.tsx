import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    gradeLevel: 'kindergarten',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        studentName: '',
        gradeLevel: 'kindergarten',
        message: ''
      });
    }, 1000);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
            alt="Admissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal mt-12">
          <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 block">
            Admissions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-slate-50 py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">Admissions</span>
        </div>
      </div>

 {/* Main Content Layout */}
 <section className="py-20 px-6 lg:px-8 bg-slate-50">
 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
 
 {/* Left Column (Process) */}
 <div className="lg:col-span-7">
 
 {/* Admissions Process */}
 <div className="reveal">
 <h2 className="text-3xl font-bold text-slate-900 mb-8">The Admissions Process</h2>
 <div className="space-y-8">
 <div className="flex gap-4">
 <div className="shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">1</div>
 <div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Application</h3>
 <p className="text-slate-600">Fill out the online application form on this page or download a physical copy to submit to our admissions office.</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">2</div>
 <div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Entrance Assessment</h3>
 <p className="text-slate-600">Prospective students will be scheduled for a brief entrance assessment to determine their appropriate grade level and academic needs.</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">3</div>
 <div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Parent Interview</h3>
 <p className="text-slate-600">An interview with the parents helps us align our educational goals and ensure we are the right fit for your child's future.</p>
 </div>
 </div>
 <div className="flex gap-4">
 <div className="shrink-0 w-12 h-12 bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl">4</div>
 <div>
 <h3 className="text-xl font-bold text-slate-900 mb-2">Enrollment & Onboarding</h3>
 <p className="text-slate-600">Upon acceptance, you will receive an offer letter. Completing the necessary paperwork and fee payment secures your child's spot!</p>
 </div>
 </div>
 </div>
 </div>

 </div>

 {/* Right Column (Application Form) */}
 <div className="lg:col-span-5 relative reveal delay-200">
 <div className="bg-white rounded p-8 md:p-10 .5rem] shadow-xl border border-slate-100 sticky top-28">
 
 {submitted ? (
 <div className="text-center py-12">
 <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto mb-6">
 <CheckCircle2 size={40} className="text-green-600" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
 <p className="text-slate-600 mb-8">Thank you for applying. Our admissions team will review your application and contact you shortly.</p>
 <button 
 onClick={() => setSubmitted(false)}
 className="text-primary font-bold hover:underline"
 >
 Submit another application
 </button>
 </div>
 ) : (
 <>
 <div className="mb-8">
 <h2 className="text-3xl font-bold text-slate-900 mb-2">Apply Now</h2>
 <p className="text-slate-500 text-sm">Fill out the form below to begin your child's journey with us.</p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-5">
 
 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Parent/Guardian Name *</label>
 <input 
 type="text" 
 required
 value={formData.parentName}
 onChange={(e) => setFormData({...formData, parentName: e.target.value})}
 className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
 placeholder="John Doe"
 />
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
 <input 
 type="email" 
 required
 value={formData.email}
 onChange={(e) => setFormData({...formData, email: e.target.value})}
 className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
 placeholder="john@example.com"
 />
 </div>
 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
 <input 
 type="tel" 
 required
 value={formData.phone}
 onChange={(e) => setFormData({...formData, phone: e.target.value})}
 className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
 placeholder="+1 (555) 000-0000"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Student Name *</label>
 <input 
 type="text" 
 required
 value={formData.studentName}
 onChange={(e) => setFormData({...formData, studentName: e.target.value})}
 className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
 placeholder="Child's Full Name"
 />
 </div>

 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Applying for Grade *</label>
 <select 
 className="rounded w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700"
 value={formData.gradeLevel}
 onChange={(e) => setFormData({...formData, gradeLevel: e.target.value})}
 >
 <option value="kindergarten">Kindergarten</option>
 <option value="primary1">Primary 1</option>
 <option value="primary2">Primary 2</option>
 <option value="primary3">Primary 3</option>
 <option value="primary4">Primary 4</option>
 <option value="primary5">Primary 5</option>
 <option value="primary6">Primary 6</option>
 <option value="jss1">Junior Secondary 1 (JSS1)</option>
 <option value="jss2">Junior Secondary 2 (JSS2)</option>
 <option value="jss3">Junior Secondary 3 (JSS3)</option>
 <option value="ss1">Senior Secondary 1 (SS1)</option>
 <option value="ss2">Senior Secondary 2 (SS2)</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-bold text-slate-700 mb-2">Additional Information</label>
 <textarea 
 rows={3}
 value={formData.message}
 onChange={(e) => setFormData({...formData, message: e.target.value})}
 className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
 placeholder="Any special requirements or questions?"
 ></textarea>
 </div>

 <button 
 type="submit"
 className="rounded w-full bg-primary text-white py-4 font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-4"
 >
 Submit Application <ArrowRight size={18} />
 </button>
 
 <p className="text-xs text-slate-500 text-center mt-4">By submitting this form, you agree to our privacy policy and terms of admission.</p>
 </form>
 </>
 )}
 
 </div>
 </div>
 
 </div>
 </section>

 {/* Support Section */}
 <section className="py-16 bg-white border-t border-slate-100">
 <div className="max-w-2xl mx-auto px-6 lg:px-8">
 <div className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 reveal">
 <div className="w-12 h-12 bg-blue-100 flex items-center justify-center text-primary shrink-0">
 <HelpCircle size={24} />
 </div>
 <div>
 <h3 className="font-bold text-slate-900 mb-1">Admissions Support</h3>
 <p className="text-sm text-slate-600 mb-3">Have questions about fees or the curriculum? Our admissions office is ready to help.</p>
 <a href="mailto:admissions@ncgos.edu" className="text-primary font-bold text-sm hover:underline flex items-center gap-1">Contact Admissions <ArrowRight size={14} /></a>
 </div>
 </div>
 </div>
 </section>
 
 </main>
 );
};

export default Admissions;
