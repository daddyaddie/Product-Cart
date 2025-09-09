import React, { useState, useEffect } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router, addToCart, updateCartQuantity, cartItems } = useAppContext()
    const [quantity, setQuantity] = useState(cartItems[product._id] || 0)

    useEffect(() => {
        setQuantity(cartItems[product._id] || 0)
    }, [cartItems, product._id])

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-800/50 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full shadow-md">
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate text-white">{product.name}</p>
            <p className="w-full text-xs text-gray-300 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs text-white">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium text-white">{currency}{product.offerPrice}</p>
                <div className="flex items-center gap-2">
                    {quantity === 0 ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product._id);
                                setQuantity(1);
                            }}
                            className="max-sm:hidden px-3 py-1.5 bg-green-400 text-black rounded-full text-xs hover:bg-green-300 transition"
                            style={{ backgroundColor: 'rgba(38, 242, 172, 0.96)' }}
                        >
                            +
                        </button>
                    ) : (
                        <div className="flex items-center gap-1 max-sm:hidden">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (quantity > 1) {
                                        updateCartQuantity(product._id, quantity - 1);
                                        setQuantity(quantity - 1);
                                    } else {
                                        updateCartQuantity(product._id, 0);
                                        setQuantity(0);
                                    }
                                }}
                                className="px-2 py-1 bg-gray-600 text-white rounded-full text-xs hover:bg-gray-500 transition"
                            >
                                -
                            </button>
                            <span className="px-2 py-1 bg-gray-700 text-white rounded text-xs min-w-[24px] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product._id);
                                    setQuantity(quantity + 1);
                                }}
                                className="px-2 py-1 text-black rounded-full text-xs hover:opacity-80 transition"
                                style={{ backgroundColor: 'rgba(38, 242, 172, 0.96)' }}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile quantity controls */}
            <div className="flex items-center justify-center gap-2 mt-2 sm:hidden">
                {quantity === 0 ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product._id);
                            setQuantity(1);
                        }}
                        className="px-4 py-2 text-black rounded-full text-sm hover:opacity-80 transition"
                        style={{ backgroundColor: 'rgba(38, 242, 172, 0.96)' }}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (quantity > 1) {
                                    updateCartQuantity(product._id, quantity - 1);
                                    setQuantity(quantity - 1);
                                } else {
                                    updateCartQuantity(product._id, 0);
                                    setQuantity(0);
                                }
                            }}
                            className="px-3 py-2 bg-gray-600 text-white rounded-full text-sm hover:bg-gray-500 transition"
                        >
                            -
                        </button>
                        <span className="px-3 py-2 bg-gray-700 text-white rounded text-sm min-w-[32px] text-center">
                            {quantity}
                        </span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product._id);
                                setQuantity(quantity + 1);
                            }}
                            className="px-3 py-2 text-black rounded-full text-sm hover:opacity-80 transition"
                            style={{ backgroundColor: 'rgba(38, 242, 172, 0.96)' }}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard