import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import ananya1 from "@/assets/ananya-1.jpeg";
import ananya2 from "@/assets/ananya-2.jpeg";
import ananya3 from "@/assets/ananya-3.jpeg";
import ananya4 from "@/assets/ananya-4.jpeg";
import ananya5 from "@/assets/ananya-5.jpeg";
import ananya6 from "@/assets/ananya-6.jpeg";

const photos = [
  { id: 1, src: ananya1, caption: "Shopping vibes ✨" },
  { id: 2, src: ananya2, caption: "Elegant queen 👑" },
  { id: 3, src: ananya3, caption: "Night out 💜" },
  { id: 4, src: ananya4, caption: "Mountain adventures 🏔️" },
  { id: 5, src: ananya5, caption: "Looking stunning 💕" },
  { id: 6, src: ananya6, caption: "Beautiful moments 🌟" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Memories</span>
          </div>
          <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
            Ananya's Beautiful Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A collection of wonderful memories that make you, you! 📸
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <AspectRatio ratio={3/4}>
                  <img 
                    src={photo.src} 
                    alt={`Ananya - ${photo.caption}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </AspectRatio>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-2 text-primary-foreground"
                  >
                    <Heart className="w-5 h-5 fill-primary-foreground" />
                    <span className="font-medium">{photo.caption}</span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground text-xs font-bold">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 text-muted-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          💝 Every picture tells a story of your beautiful journey!
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoGallery;
