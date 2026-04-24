import { Layout } from "../components/layout/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Use of Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You must use our services in compliance with all applicable laws and regulations.</li>
          <li>You are responsible for the accuracy of information you provide.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All content, trademarks, and data on this site are the property of their respective owners.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>We are not liable for any damages resulting from the use or inability to use our services.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">Changes to Terms</h2>
        <p className="mb-4">We may update these Terms of Service from time to time. Continued use of our services constitutes acceptance of the new terms.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at support@cell24x7.com.</p>
      </div>
    </Layout>
  );
}
