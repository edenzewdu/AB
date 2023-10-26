import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaRegLightbulb } from 'react-icons/fa';
import './Home.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="title">About Us</h1>
        <p className="description">
          We are a team of passionate individuals dedicated to providing the best services and solutions for our
          customers. With expertise in various fields, we strive to deliver innovative and creative solutions to meet
          your needs.
        </p>
        <div className="team-members">
          <div className="team-member">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <FiUser className="icon" />
            </motion.div>
            <h3 className="name">John Doe</h3>
            <p className="designation">CEO</p>
          </div>
          <div className="team-member">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <GiTeacher className="icon" />
            </motion.div>
            <h3 className="name">Jane Smith</h3>
            <p className="designation">Head of Education</p>
          </div>
          <div className="team-member">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <RiCustomerService2Line className="icon" />
            </motion.div>
            <h3 className="name">Alex Johnson</h3>
            <p className="designation">Customer Support</p>
          </div>
        </div>
        <div className="services">
          <div className="service">
            <motion.div
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <FaRegLightbulb className="icon" />
            </motion.div>
            <h3 className="service-title">Innovative Solutions</h3>
            <p className="service-description">
              We provide cutting-edge solutions that help businesses stay ahead of the competition.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <FaRegLightbulb className="icon" />
            </motion.div>
            <h3 className="service-title">Creative Designs</h3>
            <p className="service-description">
              Our team of designers creates visually stunning designs that leave a lasting impression.
            </p>
          </div>
          <div className="service">
            <motion.div
              whileHover={{ rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="icon-container"
            >
              <FaRegLightbulb className="icon" />
            </motion.div>
            <h3 className="service-title">Excellent Support</h3>
            <p className="service-description">
              We provide exceptional customer support to ensure a smooth experience for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;