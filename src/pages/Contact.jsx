import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageCircle, 
  Download, Copy, Check, Sparkles, Handshake, 
  Loader2, CheckCircle2 
} from 'lucide-react';
import { profile } from '../data/resume';
import { LinkedInIcon, GitHubIcon, InstagramIcon, WhatsAppIcon, HackerRankIcon } from '../components/Icons';
import MapWidget from '../components/MapWidget';
import confetti from 'canvas-confetti';

export default function Contact({ onToast }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onToast({ message: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct FormSubmit.co AJAX integration
      const response = await fetch("https://formsubmit.co/ajax/arksvg@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Portfolio Message",
          message: formState.message,
          _template: "table",
          _subject: `New Portfolio Message from ${formState.name}`,
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
        onToast({ message: "Message sent directly to Ratnakumar's inbox!" });
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      onToast({ message: "Note: Opening default mail client as fallback..." });
      // Fallback to mailto
      const mailto = `mailto:${profile.contact.email}?subject=${encodeURIComponent(formState.subject || "Project Inquiry")}&body=${encodeURIComponent(`Hi Ratnakumar,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
      window.open(mailto, '_blank');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onToast({ message: "Email copied to clipboard!" });
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onToast({ message: "Phone number copied to clipboard!" });
    }
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
          <Handshake className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight">
          Let's Build Something Exceptional
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Open to fullstack React & Spring Boot roles, cloud architecture consulting, freelance platforms, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Contact Form with FormSubmit Integration */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glow-border space-y-6 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm">
          <div>
            <h2 className="text-xl font-bold font-heading text-zinc-900 dark:text-white">
              Send a Direct Message
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Messages go directly to <span className="font-semibold text-indigo-600 dark:text-indigo-400">{profile.contact.email}</span>.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 animate-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out! I have received your email and will respond as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-white/10 hover:bg-zinc-200 dark:hover:bg-white/20 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Fullstack React & Spring Boot Opportunity / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={8}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your goals, requirements, or inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Col: Direct Channels & Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Copy Contact Card */}
          <div className="p-6 rounded-3xl glow-border space-y-4 bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/10 shadow-sm">
            <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
              Direct Channels
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10">
                <div className="flex items-center gap-3 text-xs text-zinc-800 dark:text-zinc-200 truncate">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">{profile.contact.email}</span>
                </div>
                <button
                  onClick={() => handleCopy(profile.contact.email, 'email')}
                  className="p-1.5 rounded-lg hover:bg-indigo-500/10 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10">
                <div className="flex items-center gap-3 text-xs text-zinc-800 dark:text-zinc-200 truncate">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{profile.contact.phone}</span>
                </div>
                <button
                  onClick={() => handleCopy(profile.contact.phone, 'phone')}
                  className="p-1.5 rounded-lg hover:bg-indigo-500/10 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors text-xs font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors text-xs font-semibold"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Location Map Widget */}
          <MapWidget item={{ href: "https://www.google.com/maps/@17.385044,78.486671,13z" }} />
        </div>
      </div>
    </div>
  );
}
