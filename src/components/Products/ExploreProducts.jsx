"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { id: 'Personal Care', title: 'Personal care', image: 'https://images.unsplash.com/photo-1540344448520-21396a5d44d4?w=400&h=400&fit=crop', tab: 'wellness', slug: 'personal-care' },
    { id: 'sports-nutrition', title: 'Sports Nutrition', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop', tab: 'wellness', slug: 'sports-nutrition' },
    { id: 'general-wellbeing', title: 'General Wellbeing', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop', tab: 'wellness', slug: 'general-wellbeing' },
    { id: 'vitamins', title: 'Vitamins', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', tab: 'wellness', slug: 'vitamins' },
    { id: 'hair-care', title: 'Hair Care', image: 'https://images.unsplash.com/photo-1522337360788-8b13df772ec2?w=400&h=400&fit=crop', tab: 'wellness', slug: 'hair-care' },
    { id: 'kiddz-care', title: 'Kiddz Care', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop', tab: 'wellness', slug: 'kiddz-care' },
    { id: 'probiotics', title: 'Probiotics', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&h=400&fit=crop', tab: 'wellness', slug: 'probiotics' },
    { id: 'herbal-meds', title: 'Herbal Meds', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&h=400&fit=crop', tab: 'wellness', slug: 'herbal-meds' },
    { id: 'cough-cold', title: 'Cough & Cold', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', tab: 'wellness', slug: 'cough-cold' },
    { id: 'mens-care', title: 'Men\'s Care', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop', tab: 'wellness', slug: 'mens-care' },
    { id: 'womens-care', title: 'Women\'s Care', image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=400&h=400&fit=crop', tab: 'wellness', slug: 'womens-care' },

    // Health Concerns
    { id: 'allergy-care', title: 'Allergy Care', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', tab: 'health', slug: 'allergy-care' },
    { id: 'bone-joint', title: 'Bone & Joint', image: 'https://images.unsplash.com/photo-1540344448520-21396a5d44d4?w=400&h=400&fit=crop', tab: 'health', slug: 'bone-joint' },
    { id: 'diabetic-care', title: 'Diabetic Care', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop', tab: 'health', slug: 'diabetic-care' },
    { id: 'eye-care', title: 'Eye Care', image: 'https://images.unsplash.com/photo-1522337360788-8b13df772ec2?w=400&h=400&fit=crop', tab: 'health', slug: 'eye-care' },
    { id: 'gut-care', title: 'Gut Care', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&h=400&fit=crop', tab: 'health', slug: 'gut-care' },
    { id: 'heart-care', title: 'Heart Care', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop', tab: 'health', slug: 'heart-care' },

    // Prescription Medicines
    { id: 'antibiotics', title: 'Antibiotics', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop', tab: 'prescription', slug: 'antibiotics' },
    { id: 'cardiovascular', title: 'Cardiovascular', image: 'https://images.unsplash.com/photo-1550573105-4584e7777840?w=400&h=400&fit=crop', tab: 'prescription', slug: 'cardiovascular' },
    { id: 'dermatology', title: 'Dermatology', image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=400&h=400&fit=crop', tab: 'prescription', slug: 'dermatology' },
    { id: 'pain-relief', title: 'Pain Relief', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop', tab: 'prescription', slug: 'pain-relief' },
];

const tabs = [
    { id: 'wellness', label: 'Personal Care' },
    { id: 'health', label: 'Health Concerns' },
    { id: 'prescription', label: 'Prescription Medicines' },
];

export default function ExploreProducts() {
    const [activeTab, setActiveTab] = useState('wellness');

    const filteredCategories = categories.filter(cat => cat.tab === activeTab);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h2 className="text-[3.5rem] font-bold text-gray-500 hover:text-[#ea9237] leading-tight mb-4">
                        Quality Healthcare Products For Every Need
                    </h2>
                    <p className="max-w-7xl mx-auto text-gray-500 text-lg leading-relaxed">
                        At ABC International, we are dedicated to developing, manufacturing, sourcing and delivering only the highest quality pharmaceutical products along with renowned partners across the globe.
                        We understand that in healthcare, excellence is non-negotiable. That's why we have established partnerships with industry leaders who share our commitment to uncompromising quality and patient well-being.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-gray-100 rounded-full p-1 border border-gray-200">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white text-[#ea9237] shadow-md border border-[#ea9237]/10'
                                    : 'text-gray-600 hover:bg-white/50 hover:text-[#ea9237]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categories Grid - showing for all tabs now */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <Link
                                href={`/products/${category.slug}`}
                                key={category.id}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="relative w-32 h-32 mb-4 transition-transform duration-300 group-hover:scale-110">
                                    {/* Decorative Background Blob - Updated to Yellow/Orange */}
                                    <div className="absolute inset-0 bg-[#fae57f]/30 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500 opacity-60"></div>

                                    {/* Image Container - Updated border on hover */}
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ea9237]/20 shadow-sm transition-all duration-300">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-center font-bold text-[#1e293b] text-lg group-hover:text-[#ea9237] transition-colors duration-300">
                                    {category.title}
                                </h3>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center min-h-[300px]">
                            <p className="text-gray-400 text-xl font-medium">No products found for this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
