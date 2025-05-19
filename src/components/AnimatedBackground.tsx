import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();

    // Générer des particules aléatoires avec plus de propriétés
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 40 + 30,
        delay: Math.random() * 15,
        rotation: Math.random() * 180,
        blur: Math.random() * 2 + 1,
        type: Math.random() > 0.8 ? 'special' : 'normal',
    }));

    // Effet de parallaxe au mouvement de la souris
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            setMousePosition({ x: moveX, y: moveY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation de l'effet de lumière basée sur la position de la souris
    useEffect(() => {
        controls.start({
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 152, 219, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
        });
    }, [mousePosition, controls]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Grille animée */}
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.03) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                transition: 'transform 0.5s ease-out'
            }} />

            {/* Gradient principal animé */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
                        'radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
                        'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
                        'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Particules flottantes améliorées */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${particle.type === 'special' ? 'special-particle' : ''}`}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        background: particle.type === 'special'
                            ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(99, 102, 241, 0.2))'
                            : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        filter: `blur(${particle.blur}px)`,
                        boxShadow: particle.type === 'special'
                            ? '0 0 10px rgba(236, 72, 153, 0.2)'
                            : 'none',
                    }}
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.3, 0.2],
                        rotate: [0, particle.rotation, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Vagues animées multiples */}
            <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" preserveAspectRatio="none">
                {[0, 1, 2].map((index) => (
                    <motion.path
                        key={index}
                        d="M0,32 C200,100 400,10 600,32 C800,54 1000,10 1200,32 L1200,100 L0,100 Z"
                        fill={`url(#gradient-${index})`}
                        animate={{
                            d: [
                                "M0,32 C200,100 400,10 600,32 C800,54 1000,10 1200,32 L1200,100 L0,100 Z",
                                "M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 L1200,100 L0,100 Z",
                                "M0,32 C200,100 400,10 600,32 C800,54 1000,10 1200,32 L1200,100 L0,100 Z",
                            ],
                        }}
                        style={{
                            opacity: 0.2 - index * 0.05,
                            transform: `translateY(${index * 8}px)`,
                        }}
                        transition={{
                            duration: 20 + index * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 4
                        }}
                    >
                        <defs>
                            <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
                                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
                                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                            </linearGradient>
                        </defs>
                    </motion.path>
                ))}
            </svg>

            {/* Effet de lumière ambiante interactif */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.08) 0%, rgba(0, 0, 0, 0) 50%)`,
                }}
                transition={{
                    duration: 0.5
                }}
            />

            {/* Effet de constellation */}
            <div className="absolute inset-0">
                {particles.map((particle, index) => {
                    const nextParticle = particles[(index + 1) % particles.length];
                    if (Math.abs(particle.x - nextParticle.x) < 30 && Math.abs(particle.y - nextParticle.y) < 30) {
                        return (
                            <motion.div
                                key={`line-${particle.id}`}
                                className="absolute"
                                style={{
                                    position: 'absolute',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, rgba(236, 72, 153, 0), rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0))',
                                    left: `${Math.min(particle.x, nextParticle.x)}%`,
                                    top: `${(particle.y + nextParticle.y) / 2}%`,
                                    transform: `rotate(${Math.atan2(nextParticle.y - particle.y, nextParticle.x - particle.x) * 180 / Math.PI}deg)`,
                                    transformOrigin: 'left',
                                }}
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    width: [`${Math.sqrt(Math.pow(nextParticle.x - particle.x, 2) + Math.pow(nextParticle.y - particle.y, 2))}%`],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 2,
                                }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default AnimatedBackground; 