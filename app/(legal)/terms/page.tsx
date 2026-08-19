import React from 'react';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata = {
  title: 'Terms of Service | VETTA Intelligence',
  description: 'Terms and conditions governing the use of the VETTA Intelligence website and services.',
};

export default function TermsPage() {
  const lastUpdated = "August 19, 2026";

  return (
    <main className="flex-1 bg-white">
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our website or engaging our services."
        tagline="Legal"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-neutral prose-brand prose-lg">
            <p className="text-sm text-neutral-500 mb-8 font-medium">Last Updated: {lastUpdated}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the VETTA Intelligence website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Site.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by VETTA Intelligence, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              Client projects, demonstration projects, and case studies displayed on this Site remain the intellectual property of their respective owners and are displayed here solely for portfolio and demonstration purposes.
            </p>

            <h2>3. Service Engagements</h2>
            <p>
              Information provided on this Site regarding our services (including AI automation, software development, and consulting) constitutes an overview of our capabilities and does not form a binding contract. Formal engagements are subject to specific Master Services Agreements (MSAs) and Statements of Work (SOWs) executed separately between VETTA and the client.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall VETTA Intelligence, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Site.</li>
              <li>Any conduct or content of any third party on the Site.</li>
              <li>Any content obtained from the Site.</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ul>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              Your use of the Site is at your sole risk. The Site is provided on an "AS IS" and "AS AVAILABLE" basis. The Site is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which VETTA Intelligence operates, without regard to its conflict of law provisions.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@vetta.com<br/>
              <strong>Subject:</strong> Terms of Service Inquiry
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
