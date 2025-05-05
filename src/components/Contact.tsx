
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content from form data
      const emailSubject = `Portfolio Contact: ${formData.subject}`;
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        
        Message:
        ${formData.message}
      `;
      
      // Use mailto link to open user's email client
      const mailtoLink = `mailto:imanolabodebello8@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Your message has been prepared. Please send the email from your email client.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-portfolio-secondary/30 -z-10 transform -skew-y-6"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Contact <span className="text-portfolio-primary">Me</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-primary">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always excited to discuss new projects and ideas.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:imanolabodebello8@gmail.com" className="text-gray-600 hover:text-portfolio-primary transition-colors duration-500">
                      imanolabodebello8@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+234-70-6171-6813</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://web.facebook.com/profile.php?id=61559523952190" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transition-all duration-500"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="https://medium.com/@imanolabodebello8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transition-all duration-500"
                    aria-label="Medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/iman-olabode-bello-0870b422a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-portfolio-primary hover:text-white transition-all duration-500"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Sparkles size={22} className="text-portfolio-primary mr-2" />
                <h3 className="text-2xl font-semibold">Send Me a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-gray-200 focus:border-portfolio-primary focus:ring-portfolio-primary/20 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-gray-200 focus:border-portfolio-primary focus:ring-portfolio-primary/20 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border-gray-200 focus:border-portfolio-primary focus:ring-portfolio-primary/20 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-gray-200 focus:border-portfolio-primary focus:ring-portfolio-primary/20 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to discuss a potential project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px] rounded-xl border-gray-200 focus:border-portfolio-primary focus:ring-portfolio-primary/20 transition-all duration-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 rounded-xl bg-portfolio-primary hover:bg-portfolio-primary/90 text-white font-medium flex items-center justify-center transition-all duration-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending Message...</>
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
