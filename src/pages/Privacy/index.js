import React from "react";
import "./index.css";
import { useDocTitle } from "../../components/CustomHook";

const Privacy = () => {
  useDocTitle("Application Privacy Policy | SMOB");
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        SMOB JSC is a company dedicated to developing and providing mobile
        applications on both Android and iOS platforms. We are committed to
        delivering the best user experience through high-quality products.
      </p>
      <h2>What Data Do We Collect?</h2>
      <p>
        We may collect your device identifier for analytical purposes.
        Additionally, we may log and collect your interactions within our
        products.
      </p>
      <h2>What Data Is Shared with Third Parties?</h2>
      <p>
        Only your device identifier and interaction data are shared with
        third-party analytics services (e.g., Google Analytics). We do not share
        any of your personal information, such as your email address, with any
        third parties.
      </p>
      <h2>Data We Do Not Collect or Share</h2>
      <p>
        <strong>Your Photos:</strong> Your photos may be uploaded to our servers
        for processing, but we do not store them longer than necessary for
        processing. The photos are deleted immediately after processing, and we
        do not collect or share them with any third parties.
      </p>
      <p>
        <strong>Facial Data:</strong> We do not retain any facial data from you.
      </p>
      <p>
        <strong>Email and Personal Data:</strong> We do not collect your email
        when you contact us, and we do not collect any other personal data from
        you across all our products.
      </p>
      <h2>Contact Information</h2>
      <p>
        We welcome your comments or questions regarding this Privacy Policy.
        Please reach out to us via email at{" "}
        <a href="mailto:contact@smob.vn">contact@smob.vn</a>.
      </p>
    </div>
  );
};

export default Privacy;
