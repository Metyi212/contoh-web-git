"use client";

import { useEffect, useState } from "react";
import { BookOpen, Palette, Trophy, Heart, Music, Globe, Star, Users, Sparkles } from "lucide-react";

export default function Students() {
  const [activeSection, setActiveSection] = useState("life");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    if (section === "activities") {
      setActiveSection("activities");
    } else if (section === "achievements") {
      setActiveSection("achievements");
    }
  }, []);

  const activities = [
    {
      title: "Quran Club",
      icon: BookOpen,
      description: "Daily Quran recitation, memorization, and tajweed lessons",
      schedule: "Mon, Wed, Fri",
      color: "#C4B5FD"
    },
    {
      title: "Islamic Art",
      icon: Palette,
      description: "Learn Islamic calligraphy, geometric patterns, and traditional arts",
      schedule: "Tuesday",
      color: "#A5F3FC"
    },
    {
      title: "Sports Club",
      icon: Trophy,
      description: "Football, basketball, swimming, and traditional sports",
      schedule: "Daily",
      color: "#BFDBFE"
    },
    {
      title: "Community Service",
      icon: Heart,
      description: "Volunteer programs and charity work in the community",
      schedule: "Weekly",
      color: "#DDD6FE"
    },
    {
      title: "Nasheed Choir",
      icon: Music,
      description: "Islamic songs and vocal performance training",
      schedule: "Thursday",
      color: "#C4B5FD"
    },
    {
      title: "Science Club",
      icon: Globe,
      description: "Experiments, projects, and STEM activities",
      schedule: "Wednesday",
      color: "#A5F3FC"
    }
  ];

  const achievements = [
    {
      title: "Quran Competition Winner",
      student: "Ahmad Ibrahim",
      description: "1st place in Regional Quran Recitation Competition 2024",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      icon: Trophy
    },
    {
      title: "Science Fair Excellence",
      student: "Fatima Hassan",
      description: "Gold medal in State Science Fair for renewable energy project",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      icon: Star
    },
    {
      title: "Community Hero Award",
      student: "Grade 5 Class",
      description: "Recognized for outstanding community service and charity work",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      icon: Heart
    },
    {
      title: "Mathematics Olympiad",
      student: "Yusuf Ali",
      description: "Bronze medalist in National Mathematics Olympiad",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop",
      icon: Sparkles
    }
  ];

  const studentLife = [
    {
      title: "Morning Assembly",
      time: "8:00 AM",
      description: "Start the day with Quran recitation and morning prayers",
      icon: BookOpen
    },
    {
      title: "Interactive Learning",
      time: "8:30 AM - 2:00 PM",
      description: "Engaging classes with modern teaching methods",
      icon: Users
    },
    {
      title: "Lunch & Prayer",
      time: "12:00 PM",
      description: "Healthy meals and midday prayer together",
      icon: Heart
    },
    {
      title: "After School Activities",
      time: "2:30 PM - 4:00 PM",
      description: "Clubs, sports, and enrichment programs",
      icon: Trophy
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700 mb-4" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
            {activeSection === "life" ? "Student Life" : activeSection === "activities" ? "Activities" : "Achievements"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            {activeSection === "life" ? "A Day in the Life" : activeSection === "activities" ? "Student Activities" : "Celebrating Success"}
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8">
            {activeSection === "life" 
              ? "Discover how our students spend their days learning, growing, and building lasting friendships in an Islamic environment."
              : activeSection === "activities"
              ? "We offer a wide range of extracurricular activities that complement academic learning and foster well-rounded development."
              : "Our students consistently excel in academics, sports, and community service, making us proud of their accomplishments."}
          </p>
          
          {/* Toggle Tabs */}
          <div className="inline-flex clay-shadow rounded-2xl p-1" style={{ background: 'rgba(250, 245, 255, 0.8)' }}>
            <button
              onClick={() => setActiveSection("life")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === "life" 
                  ? 'clay-inset text-purple-900' 
                  : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Student Life
            </button>
            <button
              onClick={() => setActiveSection("activities")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === "activities" 
                  ? 'clay-inset text-purple-900' 
                  : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Activities
            </button>
            <button
              onClick={() => setActiveSection("achievements")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === "achievements" 
                  ? 'clay-inset text-purple-900' 
                  : 'text-purple-700 hover:text-purple-900'
              }`}
            >
              Achievements
            </button>
          </div>
        </div>

        {activeSection === "life" && (
          <>
            {/* Daily Schedule */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {studentLife.map((item, index) => (
                <div
                  key={index}
                  className="clay-shadow rounded-3xl p-8 hover:scale-105 transition-all duration-300"
                  style={{ background: 'rgba(250, 245, 255, 0.8)' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                      <item.icon className="w-8 h-8 text-purple-900" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-xl clay-soft text-xs font-medium text-purple-700 mb-2">
                        {item.time}
                      </div>
                      <h3 className="text-xl font-bold text-purple-900 mb-2">{item.title}</h3>
                      <p className="text-purple-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Testimonial */}
            <div className="clay-shadow rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(196, 181, 253, 0.3) 0%, rgba(165, 243, 252, 0.3) 100%)' }}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto clay-soft" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
                    alt="Happy Students" 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="text-6xl text-purple-300 mb-4">"</div>
                  <p className="text-xl text-purple-900 leading-relaxed mb-6 italic">
                    I love coming to school every day! I've made so many friends, and my teachers help me understand everything. Learning Quran and playing sports makes me really happy.
                  </p>
                  <div>
                    <p className="font-bold text-purple-900">Amira Abdullah</p>
                    <p className="text-sm text-purple-600">Grade 4 Student</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeSection === "activities" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="clay-shadow rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${activity.color}20 0%, rgba(250, 245, 255, 0.8) 100%)` }}
              >
                <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mb-6" style={{ background: activity.color }}>
                  <activity.icon className="w-8 h-8 text-purple-900" />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{activity.title}</h3>
                <p className="text-purple-700 mb-4 leading-relaxed">{activity.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl clay-soft text-sm font-medium text-purple-700">
                  📅 {activity.schedule}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "achievements" && (
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="clay-shadow rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ background: 'rgba(250, 245, 255, 0.8)' }}
              >
                <div className="relative h-48 clay-soft overflow-hidden" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 clay-shadow rounded-xl flex items-center justify-center" style={{ background: 'rgba(250, 245, 255, 0.95)' }}>
                    <achievement.icon className="w-6 h-6 text-purple-900" />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-purple-900">{achievement.title}</h3>
                  <p className="text-sm font-medium text-purple-600">{achievement.student}</p>
                  <p className="text-purple-700 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <section className="mt-20">
          <div className="clay-shadow rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-900" />
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              Be Part of Our Success Story
            </h2>
            <p className="text-lg text-purple-800 mb-8 max-w-2xl mx-auto">
              Join our vibrant community where students thrive academically, spiritually, and socially.
            </p>
            <button className="px-8 py-4 rounded-2xl font-semibold clay-shadow-hover transition-all duration-300" style={{ background: 'rgba(250, 245, 255, 0.95)', color: '#581C87' }}>
              Enroll Your Child Today
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}