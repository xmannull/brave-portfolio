'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Github, Linkedin, ExternalLink, Zap, Code, Wallet, Send, Heart, Globe, Zap as Lightning, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [tipAmount, setTipAmount] = useState('1');
  const [showTipModal, setShowTipModal] = useState(false);

  const content = {
    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        welcome: 'Welcome',
        title: 'Riyad Hossain Huzaifa',
        subtitle: '🦁 Brave Web3 Developer',
        description: 'I specialize in Brave Browser and Web3 technology. My mission is to build the future of the decentralized web and give users complete control over their data and privacy.',
        cta1: 'Get in Touch',
        cta2: 'View My Work',
        support: 'Support with BAT',
      },
      about: {
        title: 'About Me',
        card1: {
          title: 'Web3 Expert',
          desc: 'Deep knowledge in Brave Wallet, BAT tokens, and decentralized applications.',
        },
        card2: {
          title: 'Fast Solutions',
          desc: 'Quick and effective service in Brave Browser integration and Web3 solutions.',
        },
        card3: {
          title: 'Tech Skills',
          desc: 'Building high-quality solutions using latest Web3 technology and Brave ecosystem.',
        },
      },
      skills: {
        title: 'My Skills',
        stack: 'Tech Stack',
      },
      projects: {
        title: 'My Projects',
        project1: {
          title: 'Brave Rewards Dashboard',
          desc: 'Beautiful dashboard to track Brave Rewards with real-time data.',
        },
        project2: {
          title: 'BAT Tipping Platform',
          desc: 'Platform for content creators to receive BAT token tips.',
        },
        project3: {
          title: 'Web3 Portfolio',
          desc: 'Complete Web3 portfolio management system with Brave Wallet integration.',
        },
      },
      contact: {
        title: 'Get in Touch',
        desc: 'Discuss your Web3 project with me. I\'m ready to help grow your business in the Brave ecosystem.',
        email: 'Send Email',
        linkedin: 'Connect on LinkedIn',
      },
      footer: {
        brand: '🦁 BRAVE',
        desc: 'Web3 and Brave Browser specialist developer.',
        quickLinks: 'Quick Links',
        social: 'Social Media',
        contact: 'Contact',
        copyright: '© 2025 Riyad Hossain Huzaifa - Brave Web3 Developer. All rights reserved.',
      },
      tip: {
        title: '💝 Support with BAT',
        desc: 'Your support helps me create better content.',
        amount: 'Tip Amount (BAT)',
        send: 'Send',
        cancel: 'Cancel',
      },
    },
    bn: {
      nav: {
        about: 'পরিচয়',
        skills: 'দক্ষতা',
        projects: 'প্রকল্প',
        contact: 'যোগাযোগ',
      },
      hero: {
        welcome: 'স্বাগতম',
        title: 'Riyad Hossain Huzaifa',
        subtitle: '🦁 Brave Web3 Developer',
        description: 'আমি Brave Browser এবং Web3 প্রযুক্তিতে বিশেষজ্ঞ। আমার লক্ষ্য হল decentralized web এর ভবিষ্যৎ তৈরি করা এবং ব্যবহারকারীদের তাদের ডেটা এবং গোপনীয়তার উপর সম্পূর্ণ নিয়ন্ত্রণ দেওয়া।',
        cta1: 'যোগাযোগ করুন',
        cta2: 'আমার কাজ দেখুন',
        support: 'BAT দিয়ে সমর্থন করুন',
      },
      about: {
        title: 'আমার পরিচয়',
        card1: {
          title: 'Web3 বিশেষজ্ঞ',
          desc: 'Brave Wallet, BAT টোকেন এবং decentralized applications এ গভীর জ্ঞান রাখি।',
        },
        card2: {
          title: 'দ্রুত সমাধান',
          desc: 'Brave Browser integration এবং Web3 সমাধানে দ্রুত এবং কার্যকর সেবা প্রদান করি।',
        },
        card3: {
          title: 'প্রযুক্তি দক্ষতা',
          desc: 'সর্বশেষ Web3 প্রযুক্তি এবং Brave ecosystem ব্যবহার করে উচ্চমানের সমাধান তৈরি করি।',
        },
      },
      skills: {
        title: 'আমার দক্ষতা',
        stack: 'প্রযুক্তি স্ট্যাক',
      },
      projects: {
        title: 'আমার প্রকল্প',
        project1: {
          title: 'Brave Rewards Dashboard',
          desc: 'Brave Rewards ট্র্যাক করার জন্য একটি সুন্দর ড্যাশবোর্ড যা রিয়েল-টাইম ডেটা দেখায়।',
        },
        project2: {
          title: 'BAT Tipping Platform',
          desc: 'সৃজনশীল কন্টেন্ট ক্রিয়েটরদের জন্য BAT টোকেন দিয়ে টিপ দেওয়ার প্ল্যাটফর্ম।',
        },
        project3: {
          title: 'Web3 Portfolio',
          desc: 'Brave Wallet integration সহ সম্পূর্ণ Web3 portfolio ম্যানেজমেন্ট সিস্টেম।',
        },
      },
      contact: {
        title: 'আমার সাথে যোগাযোগ করুন',
        desc: 'আপনার Web3 প্রকল্প সম্পর্কে আলোচনা করতে আমার সাথে যোগাযোগ করুন। আমি Brave ecosystem এ আপনার ব্যবসা বৃদ্ধিতে সহায়তা করতে প্রস্তুত।',
        email: 'ইমেইল পাঠান',
        linkedin: 'LinkedIn এ সংযোগ করুন',
      },
      footer: {
        brand: '🦁 BRAVE',
        desc: 'Web3 এবং Brave Browser এ বিশেষজ্ঞ ডেভেলপার।',
        quickLinks: 'দ্রুত লিংক',
        social: 'সোশ্যাল মিডিয়া',
        contact: 'যোগাযোগ',
        copyright: '© 2025 Riyad Hossain Huzaifa - Brave Web3 Developer. সর্বাধিকার সংরক্ষিত।',
      },
      tip: {
        title: '💝 BAT দিয়ে সমর্থন করুন',
        desc: 'আপনার সমর্থন আমাকে আরও ভাল কন্টেন্ট তৈরি করতে সাহায্য করবে।',
        amount: 'টিপ পরিমাণ (BAT)',
        send: 'পাঠান',
        cancel: 'বাতিল',
      },
    },
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBraveTip = async () => {
    if (typeof window !== 'undefined' && 'ethereum' in window) {
      try {
        const ethereum = window.ethereum as { request: (args: { method: string }) => Promise<string[]> };
        await ethereum.request({
          method: 'eth_requestAccounts',
        });
        alert(language === 'en' ? `Thank you! Your tip of ${tipAmount} BAT has been sent.` : `ধন্যবাদ! আপনার টিপ ${tipAmount} BAT পাঠানো হয়েছে।`);
        setShowTipModal(false);
      } catch {
        alert(language === 'en' ? 'Brave Wallet connection failed.' : 'Brave Wallet সংযোগ ব্যর্থ হয়েছে।');
      }
    }
  };

  const skills = [
    { name: 'Web3 Development', level: 95 },
    { name: 'Brave Integration', level: 90 },
    { name: 'Smart Contracts', level: 85 },
    { name: 'DApp Development', level: 92 },
  ];

  const techStack = ['Solidity', 'Web3.js', 'Ethers.js', 'React', 'Next.js', 'TypeScript', 'Brave API', 'BAT Token'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-amber-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            language === 'en'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-orange-600 border border-orange-200'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('bn')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            language === 'bn'
              ? 'bg-orange-600 text-white'
              : 'bg-white text-orange-600 border border-orange-200'
          }`}
        >
          বাংলা
        </button>
      </div>

      {/* নেভিগেশন */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              🦁 BRAVE
            </span>
          </div>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </nav>

      {/* হিরো সেকশন */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* বাম দিক - টেক্সট */}
          <div>
            <div className="mb-6">
              <h2 className="text-orange-600 font-semibold text-lg mb-2">{t.hero.welcome}</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="text-orange-600">Riyad</span>
                <br />
                Hossain Huzaifa
              </h1>
              <p className="text-2xl text-gray-700 font-semibold">
                {t.hero.subtitle}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA বাটন */}
            <div className="flex flex-col gap-4 pt-8">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  {t.hero.cta1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  onClick={() => scrollToSection('projects')}
                >
                  {t.hero.cta2}
                </Button>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                onClick={() => setShowTipModal(true)}
              >
                <Heart className="w-5 h-5 mr-2" />
                {t.hero.support}
              </Button>
            </div>

            {/* সোশ্যাল লিংক */}
            <div className="flex gap-4 pt-8">
              <a
                href="mailto:riyad@example.com"
                className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5 text-orange-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5 text-orange-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-orange-600" />
              </a>
            </div>
          </div>

          {/* ডান দিক - ইলাস্ট্রেশন */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 animate-bounce">🦁</div>
                <p className="text-2xl font-bold text-orange-700">Brave Web3</p>
                <p className="text-orange-600">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* পরিচয় সেকশন */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.about.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wallet, title: t.about.card1.title, desc: t.about.card1.desc },
              { icon: Lightning, title: t.about.card2.title, desc: t.about.card2.desc },
              { icon: Code, title: t.about.card3.title, desc: t.about.card3.desc },
            ].map((card, i) => (
              <Card key={i} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-orange-50 to-red-50">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-lg flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* দক্ষতা সেকশন */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.skills.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* দক্ষতা বার */}
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-orange-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* প্রযুক্তি স্ট্যাক */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.skills.stack}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border border-orange-200 text-center font-semibold text-orange-900 hover:shadow-lg transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* প্রকল্প সেকশন */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.projects.project1.title, desc: t.projects.project1.desc },
              { title: t.projects.project2.title, desc: t.projects.project2.desc },
              { title: t.projects.project3.title, desc: t.projects.project3.desc },
            ].map((project, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer bg-gradient-to-br from-orange-50 to-red-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                </div>
                <p className="text-gray-600 mb-6">{project.desc}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                    Web3
                  </span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                    Brave
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* যোগাযোগ সেকশন */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {t.contact.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:riyad@example.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.contact.email}
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              {t.contact.linkedin}
            </Button>
          </div>
        </div>
      </section>

      {/* ফুটার */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  {t.footer.brand}
                </span>
              </h3>
              <p className="text-gray-400">
                {t.footer.desc}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {t.nav.about}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {t.nav.skills}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {t.nav.projects}
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.social}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:riyad@example.com"
                    className="hover:text-orange-400 transition-colors"
                  >
                    riyad@example.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    +880 1234 567890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* BAT Tip Modal */}
      {showTipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.tip.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.tip.desc}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.tip.amount}
                </label>
                <input
                  type="number"
                  value={tipAmount}
                  onChange={(e) => setTipAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min="0.1"
                  step="0.1"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleBraveTip}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {t.tip.send}
              </Button>
              <Button
                onClick={() => setShowTipModal(false)}
                variant="outline"
                className="flex-1"
              >
                {t.tip.cancel}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
