import React, { useEffect } from 'react'

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        document.addEventListener("mousemove", (e) => {
            cursor.setAttribute(
                "style",
                "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
            );
        });

        document.addEventListener("mousedown", () => {
            cursor.classList.add("cursor-white");
            
            const ripple = document.createElement("div");
           
        });

        document.addEventListener("mouseup", () => {
            cursor.classList.remove("cursor-white");
        });
    }, []);

    return <div className="cursor w-5 h-5 border-2 border-white rounded-full absolute pointer-events-none transition-all duration-[0.1s] ease-out z-50 hidden md:block"></div>;
};

export default CustomCursor;