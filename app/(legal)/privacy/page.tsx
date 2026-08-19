import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Privacy Policy | VETTA Intelligence',
  description: 'Our privacy policy detailing how we handle and protect your data.',
};

export default function PrivacyPage() {
  const lastUpdated = "August 19, 2026";

  return (
    <main className="flex-1 bg-white">
      <PageHeader
        title="Privacy Policy"
        description="We believe in transparent, secure data handling. This document outlines how we collect, use, and protect your information."
        tagline="Legal"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-neutral prose-brand prose-lg">
            <p className="text-sm text-neutral-500 mb-8 font-medium">Last Updated: {lastUpdated}</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with VETTA Intelligence through our website, we may collect the following information:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, and phone number when submitted via our contact forms.</li>
              <li><strong>Business Details:</strong> Information regarding your company, project requirements, and technical infrastructure provided during inquiries.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and anonymous usage statistics collected via standard web analytics to improve our site performance.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We utilize the collected information strictly for business purposes:
            </p>
            <ul>
              <li>To respond to your inquiries and evaluate potential projects.</li>
              <li>To provide the technical consulting and engineering services requested.</li>
              <li>To improve our website's performance and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            <p>
              <strong>We do not sell, rent, or lease your personal information to third parties.</strong>
            </p>

            <h2>3. Data Security & Protection</h2>
            <p>
              Security is a core engineering principle at VETTA. We implement industry-standard encryption, secure cloud infrastructure, and strict access controls to protect your data against unauthorized access, alteration, or destruction. Information submitted via our contact forms is securely stored within isolated, authenticated database environments.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>
              We may utilize trusted third-party service providers (such as email routing services or cloud hosting providers) to operate our website and business. These providers only have access to the information necessary to perform their specific functions and are contractually obligated to maintain strict confidentiality.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal data stored by VETTA. You may also request that we restrict the processing of your data.
            </p>
            
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact our legal team at:
            </p>
            <p>
              <strong>Email:</strong> legal@vetta.com<br/>
              <strong>Subject:</strong> Privacy Inquiry
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
