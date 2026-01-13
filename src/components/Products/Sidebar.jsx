"use client";
import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    { id: 'personal-care', label: 'Personal Care' },
    { id: 'medical-nutrition', label: 'Medical Nutrition' },
    { id: 'allergy-care', label: 'Allergy Care' },
    { id: 'blood-circulation', label: 'Blood Circulation & Memory' },
    { id: 'bone-joint', label: 'Bone and Joint Care' },
    { id: 'brain-care', label: 'Brain Care' },
    { id: 'cough-cold', label: 'Cough & Cold' },
    { id: 'diabetic-care', label: 'Diabetic Care' },
    { id: 'eye-care', label: 'Eye Care' },
    { id: 'general-wellbeing', label: 'General Wellbeing' },
    { id: 'gut-care', label: 'Gut Care' },
    { id: 'hair-care', label: 'Hair Care' },
    { id: 'heart-care', label: 'Heart Care' },
    { id: 'herbal-meds', label: 'Herbal Meds' },
];

export default function Sidebar({ activeCategory }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = categories.filter(cat =>
        cat.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-10">
            {/* Filter by Country - Mock */}
            <div>
                <h3 className="text-xl font-bold text-[#111827] mb-4">Filter by Country</h3>
                <div className="relative">
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-gray-500 appearance-none outline-none focus:border-[#ea9237] transition-colors">
                        <option>Select country</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                    </div>
                </div>
            </div>

            {/* Filter by Category */}
            <div>
                <h3 className="text-xl font-bold text-[#111827] mb-4">Filter by Category</h3>
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Search Categories"
                        className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-5 py-3 text-gray-600 outline-none focus:border-[#ea9237] transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <div className="space-y-1">
                    {filteredCategories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/products/${cat.id}`}
                            className={`flex items-center justify-between px-2 py-2.5 rounded-lg group transition-colors ${activeCategory === cat.id
                                ? 'text-[#ea9237] font-semibold'
                                : 'text-gray-600 hover:text-[#ea9237]'
                                }`}
                        >
                            <span>{cat.label}</span>
                            <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeCategory === cat.id ? 'opacity-100' : ''
                                }`} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
