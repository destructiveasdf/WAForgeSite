import React, { useEffect, useRef } from 'react';

const TextRain = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const codeSnippets = ['print("Hello, World!")', 'console.log("Hello World");', 'public string "Hello World";', 'System.out.println("Hello, World!");', '<a>', '</a>'];

    class Particle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * this.canvas.width;
            this.y = 0;
            this.size = 1;
            this.speed = Math.random() * 3 + 1;
            this.code = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
        update() {
            this.y += this.speed;
            if (this.y > this.canvas.height) {
                this.y = 0 - this.size;
                this.x = Math.random() * this.canvas.width;
                this.speed = Math.random() * 3 + 1;
            }
        }
        draw(ctx) {
            ctx.fillStyle = '#ffffff77';
            ctx.font = this.size + 'px Arial';
            if (window.innerWidth > 600) {
                ctx.font = "20px 'Montserrat', sans-serif";
            } else {
                ctx.font = "10px 'Montserrat', sans-serif";
            }
            ctx.fillText(this.code, this.x, this.y);
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;

        for (let i = 0; i < 30; i++) {
            particles.current.push(new Particle(canvas));
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.current.length; i++) {
                particles.current[i].update();
                particles.current[i].draw(ctx);
            }
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return <canvas ref={canvasRef} className='relative w-full h-full top-0 left-0'></canvas>;
};

export default TextRain;