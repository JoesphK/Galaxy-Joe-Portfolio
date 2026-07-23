import React from 'react';

const CertificateSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Certificates
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Microsoft Certified: Azure Solutions Architect Expert (AZ-305)</h3>
            <p className="text-gray-400 mb-4">Microsoft</p>
            {/*
            <a
              href="https://www.credly.com/badges/YOUR_BADGE_ID/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              View Credential
            </a>
            */}
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">AWS Certified Solutions Architect - Associate (SAA-C03)</h3>
            <p className="text-gray-400 mb-4">Amazon Web Services</p>
            {/*
            <a
              href="YOUR_AWS_SAA_CREDENTIAL_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              View Credential
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
