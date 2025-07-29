import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Lightbulb, Target, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe Creative Suite",
    "Figma",
    "Sketch",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Brand Identity",
    "Web Design",
    "Print Design",
    "UI/UX Design",
    "Typography",
    "Color Theory",
  ];

  const features = [
    {
      icon: Palette,
      title: "Creative Vision",
      description:
        "Transforming ideas into visually compelling designs that resonate with target audiences.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Bringing fresh perspectives and cutting-edge design approaches to every project.",
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      description:
        "Designing with purpose to achieve specific business goals and user objectives.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Delivering exceptional results with meticulous attention to detail and craftsmanship.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I&apos;m a passionate graphic designer with over 5 years of
            experience creating impactful visual solutions for brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Visual Stories That Matter
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                With a keen eye for detail and a passion for storytelling
                through design, I help businesses communicate their message
                effectively through powerful visual narratives.
              </p>
              <p>
                My approach combines strategic thinking with creative execution,
                ensuring that every design not only looks beautiful but also
                serves a purpose and drives results.
              </p>
              <p>
                From brand identity to digital experiences, I create designs
                that connect with audiences and leave lasting impressions.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
