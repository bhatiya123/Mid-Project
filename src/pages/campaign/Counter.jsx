import React, { useState, useEffect, useRef } from "react";
import { Heart, Award, Users, Medal } from "lucide-react";
import "./counter.css";

const AnimatedCounter = ({ end, duration, icon, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing after it becomes visible
      }
    };

    const observer = new IntersectionObserver(handleIntersection);
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(end * percentage);

        setCount(currentCount);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible, end, duration]);

  const IconComponent = {
    heart: Heart,
    award: Award,
    users: Users,
    medal: Medal,
  }[icon] || Heart;

  return (
    <div className="counter-item" ref={ref}>
      <IconComponent className="counter-icon" />
      <div className="counter-value">{count}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="statistics-counter">
      <AnimatedCounter end={25} duration={2000} icon="medal" label="Year Experience" />
      <AnimatedCounter end={3225} duration={2000} icon="heart" label="Happy Donors" />
      <AnimatedCounter end={90} duration={2000} icon="award" label="Total Awards" />
      <AnimatedCounter end={3168} duration={2000} icon="users" label="Happy Recipient" />
    </div>
  );
};

export default Counter;
