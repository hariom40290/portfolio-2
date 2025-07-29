import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Monitor,
  FileText,
  Smartphone,
  Package,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Complete brand identity solutions including logo design, color palettes, typography, and brand guidelines.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Schemes",
        "Typography",
      ],
      price: "Starting at $1,500",
    },
    {
      icon: Monitor,
      title: "Web Design",
      description:
        "Modern, responsive website designs that provide exceptional user experiences across all devices.",
      features: [
        "Responsive Design",
        "UI/UX Design",
        "Prototyping",
        "User Testing",
      ],
      price: "Starting at $2,500",
    },
    {
      icon: FileText,
      title: "Print Design",
      description:
        "High-quality print materials including brochures, flyers, business cards, and marketing collateral.",
      features: [
        "Brochures",
        "Business Cards",
        "Posters",
        "Marketing Materials",
      ],
      price: "Starting at $500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Intuitive mobile app interfaces designed for optimal user engagement and conversion.",
      features: ["iOS Design", "Android Design", "User Flows", "Prototyping"],
      price: "Starting at $3,000",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "Eye-catching packaging solutions that stand out on shelves and communicate brand values.",
      features: [
        "Product Packaging",
        "Label Design",
        "Box Design",
        "3D Mockups",
      ],
      price: "Starting at $800",
    },
    {
      icon: Users,
      title: "Consultation & Strategy",
      description:
        "Design consultation and strategic planning to align your visual identity with business goals.",
      features: [
        "Design Audit",
        "Strategy Planning",
        "Brand Positioning",
        "Market Research",
      ],
      price: "Starting at $200/hour",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive design services to help your brand stand out
            and connect with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {service.price}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let&apos;s discuss your specific
            requirements.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
