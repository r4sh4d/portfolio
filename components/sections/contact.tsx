"use client";
import ContactForm from "../contact-form";
import { SectionTitle } from "../section-title";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { GlowingEffect } from "../ui/glowing-effect";
import { PixelatedCanvas } from "../ui/pixelated-canvas";
import { Config } from "@/config";

export default function ContactSection() {
  const { contact } = Config;
  return (
    <BackgroundBeamsWithCollision>
      <section className="py-24 max-w-7xl mx-auto px-4">
        <SectionTitle className="mb-8">{contact.title}</SectionTitle>
        <p className="text-center text-xl text-neutral-300 font-medium mb-32 max-w-4xl mx-auto">
          {contact.description}
        </p>

        <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-10 lg:flex-row lg:gap-20 mt-32">
          <ContactForm className="flex-1 mt-8 lg:mt-0" />
          <div className="flex-1 flex justify-end">
            <div className="relative">
              <PixelatedCanvas
                src="/rashad.jpg"
                width={400}
                height={500}
                cellSize={3}
                dotScale={1}
                shape="circle"
                backgroundColor="#000000"
                dropoutStrength={0}
                interactive
                distortionStrength={3}
                distortionRadius={80}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#ffffff"
                tintStrength={0.3}
                className="rounded-xl border border-neutral-800 shadow-lg"
              />
              <GlowingEffect
                borderWidth={2}
                spread={40}
                glow={true}
                disabled={false}
                proximity={20}
                inactiveZone={0}
                className="w-99.5 h-124.5 rounded-2xl mt-px ml-px"
              />
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
