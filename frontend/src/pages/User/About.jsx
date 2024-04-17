import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-black-800 py-8 mx-16 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">About Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-500">Our Mission</h2>
          <p className="text-white-800 mb-6">
            At NewBee, our mission is to deliver the highest quality products and services while fostering a culture of sustainability and social responsibility. We strive to exceed customer expectations and contribute positively to the communities we serve.
          </p>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Our Values</h2>
          <ul className="list-disc list-inside text-white mb-6">
            <li>Quality: We are committed to excellence in everything we do.</li>
            <li>Integrity: Honesty and transparency guide our actions.</li>
            <li>Innovation: We embrace creativity and continuous improvement.</li>
            <li>Customer Focus: Your satisfaction is our top priority.</li>
            <li>Sustainability: We are dedicated to reducing our environmental impact.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Our Team</h2>
          <p className="text-white mb-6">
            Our dedicated team of professionals brings a wealth of experience and expertise to every project. From product design to customer support, we are passionate about delivering outstanding results.
          </p>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Contact Us</h2>
          <p className="text-white mb-6">
            We'd love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries. You can contact us via email at [NewBeeServices@gmail.com] or by phone at [+91-6786543224].
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Visit Us</h2>
        <p className="text-white mb-6">
          NewBee is located at:
          Dhanbad
          Jharkhand,828201
        </p>
        <div className="w-full lg:w-3/4 mx-auto">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116886.44196507073!2d86.51835439999998!3d23.722358149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f695f516bcfc99%3A0x1b73219e9afbe6f7!2sBaliapur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1712459267201!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
