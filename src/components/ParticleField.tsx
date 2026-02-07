import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;
  drift: number;
};

const PARTICLE_COUNT = 90;

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0.8 + Math.random() * 2.2,
          speed: 0.2 + Math.random() * 0.6,
          angle: Math.random() * Math.PI * 2,
          drift: 0.3 + Math.random() * 0.7,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(79, 140, 255, 0.7)";

      particles.forEach((particle, index) => {
        particle.angle += particle.speed * 0.01;
        particle.x += Math.cos(particle.angle) * particle.drift;
        particle.y += Math.sin(particle.angle) * particle.drift;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.random() * canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        const next = particles[(index + 1) % particles.length];
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
        if (distance < 140) {
          ctx.strokeStyle = "rgba(79, 140, 255, 0.25)";
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      createParticles();
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
};

export default ParticleField;
