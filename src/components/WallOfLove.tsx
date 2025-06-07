
const WallOfLove = () => {
  const testimonials = [
    {
      name: "Emma Wilson",
      role: "Frontend Developer",
      content: "The courses here transformed my career. I went from a complete beginner to landing my dream job in just 6 months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "James Rodriguez",
      role: "UX Designer",
      content: "Amazing instructors and well-structured content. The projects really helped me build a strong portfolio.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      role: "Digital Marketer",
      content: "I love the flexibility and quality of courses. Perfect for busy professionals looking to upskill.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content: "The practical approach and real-world projects made all the difference in my learning journey.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      content: "Excellent content quality and supportive community. Highly recommend to anyone looking to advance their career.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b669ad00?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Software Engineer",
      content: "The step-by-step approach and hands-on projects helped me transition into tech successfully.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wall of Love</h2>
          <p className="text-xl text-gray-600">See what our students are saying about their learning experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;
