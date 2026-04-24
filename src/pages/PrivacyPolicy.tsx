import { Layout } from "../components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information you provide (such as name, email, phone, company)</li>
          <li>Information collected automatically (such as browser type, device, usage data)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and improve our services</li>
          <li>To communicate with you about your inquiries or demo requests</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Information Sharing</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>We do not sell your personal information</li>
          <li>We may share information with trusted service providers as needed to operate our business</li>
          <li>We may disclose information if required by law</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Data Protection</h2>
        <p className="mb-4">We use reasonable measures to protect your information from unauthorized access or disclosure.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@cell24x7.com.</p>
      </div>
    </Layout>
  );
}
