import Image from 'next/image';

export default function ProductCard({ product }) {
    return (
        <div className="group bg-[#f0f9ff]/50 hover:bg-[#fff7ed] rounded-3xl p-6 transition-all duration-300 border-2 border-transparent hover:border-[#ea9237]/20 shadow-sm hover:shadow-xl cursor-pointer">
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-white/50 p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#ea9237] transition-colors">
                {product.title}
            </h3>

            <p className="text-gray-500 leading-relaxed line-clamp-2">
                {product.description}
            </p>
        </div>
    );
}
