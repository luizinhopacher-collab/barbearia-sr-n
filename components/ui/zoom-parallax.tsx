import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
export type ParallaxImage = { src: string; alt: string };
export function ZoomParallax({ images }: { images: ParallaxImage[] }) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
 const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1.24]);
 const y = useTransform(scrollYProgress, [0, 1], [65, -65]);
 const reduced = useReducedMotion();
 return <div ref={ref} className="parallax-gallery"><motion.div className="gallery-track" style={reduced ? {} : { scale, y }}>{images.map((image, i) => <figure key={image.src} className={`gallery-image gallery-image-${i}`}><img src={image.src} alt={image.alt} loading="lazy" /><figcaption>{['O ritual','O detalhe','A experiência'][i]}</figcaption></figure>)}</motion.div><span className="gallery-stamp">FEITO COM TEMPO.<br/>FEITO PARA VOCÊ.</span></div>;
}
