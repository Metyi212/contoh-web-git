import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/app/utils";
import { BookOpen, Heart, Users, Star, Trophy, Sparkles, GraduationCap, Globe } from "lucide-react";

export default function Homepage() {
  const values = [
    { icon: BookOpen, title: "Islamic Education", description: "Comprehensive Quranic studies and Islamic teachings", color: "#C4B5FD" },
    { icon: Heart, title: "Character Building", description: "Nurturing moral values and ethical behavior", color: "#A5F3FC" },
    { icon: Users, title: "Community", description: "Building strong bonds within our school family", color: "#BFDBFE" },
    { icon: Star, title: "Excellence", description: "Striving for academic and spiritual excellence", color: "#DDD6FE" },
  ];

  const highlights = [
    { icon: Trophy, title: "Award-Winning", description: "Recognized for excellence in Islamic education" },
    { icon: Globe, title: "Diverse Curriculum", description: "Balanced Islamic and modern education" },
    { icon: Sparkles, title: "Modern Facilities", description: "State-of-the-art learning environments" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 float-animation">
              <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
                Welcome to Az-Zahrah
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-purple-900 leading-tight">
                Nurturing <span style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Young Minds</span> with Faith
              </h1>
              <p className="text-lg text-purple-700 leading-relaxed">
                Where Islamic values meet academic excellence. Join us in creating a generation of knowledgeable, compassionate, and faithful leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={createPageUrl("Students")} className="group">
                  <button className="px-8 py-4 rounded-2xl font-semibold text-white clay-shadow-hover transition-all duration-300" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)' }}>
                    Explore Student Life
                  </button>
                </Link>
                <Link href={createPageUrl("Teachers")} className="group">
                  <button className="px-8 py-4 rounded-2xl font-semibold text-purple-700 clay-shadow-hover transition-all duration-300" style={{ background: 'rgba(250, 245, 255, 0.8)' }}>
                    Meet Our Teachers
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="clay-shadow rounded-3xl overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6908027615d2da4185d3569c/873bc2213_Gedung-SD-IAZ-th-2019-1.jpg" 
                  alt="SD Islam Az-Zahrah School Building" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 clay-shadow rounded-3xl flex items-center justify-center float-animation" style={{ background: 'rgba(250, 245, 255, 0.95)', animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-900">500+</div>
                  <div className="text-xs text-purple-600">Students</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 clay-shadow rounded-3xl flex items-center justify-center float-animation" style={{ background: 'rgba(250, 245, 255, 0.95)', animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-900">50+</div>
                  <div className="text-xs text-purple-600">Teachers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700 mb-4" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Building Tomorrow's Leaders</h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              At Az-Zahrah, we cultivate well-rounded individuals through faith, knowledge, and character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="clay-shadow rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ 
                  background: `linear-gradient(135deg, ${value.color}20 0%, rgba(250, 245, 255, 0.8) 100%)`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: value.color }}>
                  <value.icon className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{value.title}</h3>
                <p className="text-purple-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="clay-shadow rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(196, 181, 253, 0.2) 0%, rgba(165, 243, 252, 0.2) 100%)' }}>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-20 h-20 clay-shadow rounded-2xl flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                    <highlight.icon className="w-10 h-10 text-purple-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">{highlight.title}</h3>
                  <p className="text-purple-700">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="clay-shadow rounded-3xl overflow-hidden" style={{ background: 'rgba(250, 245, 255, 0.8)' }}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700 mb-4 w-fit" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
                  Our Mission
                </div>
                <h2 className="text-4xl font-bold text-purple-900 mb-6">
                  Empowering Students Through Islamic Values
                </h2>
                <p className="text-lg text-purple-700 leading-relaxed mb-6">
                  We are dedicated to providing a nurturing environment where students grow academically, spiritually, and socially. Our holistic approach combines traditional Islamic teachings with modern educational methods.
                </p>
                <ul className="space-y-3">
                  {["Comprehensive Islamic Studies", "Academic Excellence", "Character Development", "Community Engagement"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-purple-700">
                      <div className="w-6 h-6 clay-shadow rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                        <Star className="w-3 h-3 text-purple-900" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 lg:h-auto">
                <div className="absolute inset-0 clay-soft rounded-3xl m-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                    alt="Students Learning" 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="clay-shadow rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-900" />
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Join Our School Community</h2>
            <p className="text-lg text-purple-800 mb-8 max-w-2xl mx-auto">
              Become part of a warm, welcoming environment where every child is valued and encouraged to reach their full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl font-semibold clay-shadow-hover transition-all duration-300" style={{ background: 'rgba(250, 245, 255, 0.95)', color: '#581C87' }}>
                Schedule a Visit
              </button>
              <button className="px-8 py-4 rounded-2xl font-semibold text-white clay-shadow-hover transition-all duration-300" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)' }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}