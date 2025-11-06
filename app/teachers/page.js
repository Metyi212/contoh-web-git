"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, BookOpen, Award, Heart, Users } from "lucide-react";

export default function Teachers() {
  const [activeSection, setActiveSection] = useState("teachers");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    if (section === "departments") {
      setActiveSection("departments");
    }
  }, []);

  const teachers = [
    {
      name: "Rika Damayanti",
      position: "Principal & Islamic Studies",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "fatima@azzahrah-school.edu",
      phone: "+1 (555) 123-4501",
      bio: "Leading our school with 20+ years of experience in Islamic education",
      specialization: "Quranic Studies & Leadership"
    },
    {
      name: "Mr. Ahmed Hassan",
      position: "Arabic Language Teacher",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "ahmed@azzahrah-school.edu",
      phone: "+1 (555) 123-4502",
      bio: "Passionate about teaching Arabic language and literature",
      specialization: "Arabic & Linguistics"
    },
    {
      name: "Ms. Aisha Mohammed",
      position: "Mathematics Teacher",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "aisha@azzahrah-school.edu",
      phone: "+1 (555) 123-4503",
      bio: "Making mathematics fun and accessible for all students",
      specialization: "Mathematics & STEM"
    },
    {
      name: "Mr. Ibrahim Ali",
      position: "Science Teacher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "ibrahim@azzahrah-school.edu",
      phone: "+1 (555) 123-4504",
      bio: "Inspiring curiosity about the natural world through Islamic perspective",
      specialization: "Natural Sciences"
    },
    {
      name: "Ms. Mariam Khalil",
      position: "English Language Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "mariam@azzahrah-school.edu",
      phone: "+1 (555) 123-4505",
      bio: "Helping students master English communication skills",
      specialization: "English Literature"
    },
    {
      name: "Mr. Omar Farouk",
      position: "Physical Education",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "omar@azzahrah-school.edu",
      phone: "+1 (555) 123-4506",
      bio: "Promoting health and fitness with Islamic values",
      specialization: "Sports & Wellness"
    }
  ];

  const departments = [
    {
      name: "Islamic Studies",
      icon: BookOpen,
      description: "Comprehensive Quranic education, Hadith studies, and Islamic history",
      teachers: 8,
      color: "#C4B5FD"
    },
    {
      name: "Languages",
      icon: Users,
      description: "Arabic, English, and additional language programs",
      teachers: 6,
      color: "#A5F3FC"
    },
    {
      name: "Sciences",
      icon: Award,
      description: "Natural sciences, mathematics, and technology education",
      teachers: 7,
      color: "#BFDBFE"
    },
    {
      name: "Arts & Culture",
      icon: Heart,
      description: "Islamic art, calligraphy, and cultural studies",
      teachers: 5,
      color: "#DDD6FE"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700 mb-4" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
            {activeSection === "teachers" ? "Our Educators" : "Our Departments"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            {activeSection === "teachers" ? "Meet Our Dedicated Teachers" : "Academic Departments"}
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8">
            {activeSection === "teachers" 
              ? "Our qualified and passionate educators are committed to nurturing every student's potential through Islamic values and academic excellence."
              : "Our school is organized into specialized departments, each focused on delivering excellence in their field while maintaining Islamic principles."}
          </p>
          
          {/* Toggle Tabs */}
          <div className="inline-flex clay-shadow rounded-2xl p-1" style={{ background: 'rgba(250, 245, 255, 0.8)' }}>
            <button
              onClick={() => setActiveSection("teachers")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === "teachers" 
                  ? 'clay-inset text-purple-900' 
                  : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Our Teachers
            </button>
            <button
              onClick={() => setActiveSection("departments")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === "departments" 
                  ? 'clay-inset text-purple-900' 
                  : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Departments
            </button>
          </div>
        </div>

        {activeSection === "teachers" ? (
          /* Teachers Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="clay-shadow rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(250, 245, 255, 0.8)' }}
              >
                <div className="relative h-64 clay-soft overflow-hidden" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-1">{teacher.name}</h3>
                    <p className="text-sm font-medium text-purple-600">{teacher.position}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 rounded-xl clay-soft text-xs font-medium text-purple-700">
                      {teacher.specialization}
                    </div>
                  </div>
                  
                  <p className="text-sm text-purple-700 leading-relaxed">{teacher.bio}</p>
                  
                  <div className="flex flex-col gap-2 pt-4 border-t border-purple-200">
                    <a href={`mailto:${teacher.email}`} className="flex items-center gap-2 text-sm text-purple-700 hover:text-purple-900 transition-colors">
                      <div className="w-8 h-8 clay-shadow rounded-xl flex items-center justify-center" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
                        <Mail className="w-4 h-4" />
                      </div>
                      <span>{teacher.email}</span>
                    </a>
                    <a href={`tel:${teacher.phone}`} className="flex items-center gap-2 text-sm text-purple-700 hover:text-purple-900 transition-colors">
                      <div className="w-8 h-8 clay-shadow rounded-xl flex items-center justify-center" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>{teacher.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Departments Grid */
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="clay-shadow rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${dept.color}20 0%, rgba(250, 245, 255, 0.8) 100%)` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 clay-shadow rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: dept.color }}>
                    <dept.icon className="w-10 h-10 text-purple-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-900 mb-2">{dept.name}</h3>
                    <p className="text-purple-700 mb-4 leading-relaxed">{dept.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl clay-soft text-sm font-medium text-purple-700">
                      <Users className="w-4 h-4" />
                      <span>{dept.teachers} Teachers</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Why Our Teachers Section */}
        <section className="mt-20">
          <div className="clay-shadow rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(196, 181, 253, 0.2) 0%, rgba(165, 243, 252, 0.2) 100%)' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Why Our Teachers Stand Out</h2>
              <p className="text-lg text-purple-700 max-w-2xl mx-auto">
                Our educators bring together professional excellence and deep commitment to Islamic values.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <Award className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Highly Qualified</h3>
                <p className="text-purple-700">All teachers hold advanced degrees and teaching certifications</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <Heart className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Passionate Educators</h3>
                <p className="text-purple-700">Dedicated to nurturing both academic and spiritual growth</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <BookOpen className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">Continuous Learning</h3>
                <p className="text-purple-700">Regular professional development and training programs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}