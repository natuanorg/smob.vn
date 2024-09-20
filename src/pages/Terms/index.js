import React from "react";
import "./index.css";
import { useDocTitle } from "../../components/CustomHook";

const Terms = () => {
  useDocTitle("Terms of Service | SMOB");
  return (
    <div className="container">
      <p>
        This Terms of Service is a legal contract between you and SMOB JOINT
        STOCK COMPANY concerning your use of the mobile application ("Software")
        that you downloaded from app stores.
      </p>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using this Software, you agree to comply
        with the terms and conditions of this Agreement. If you do not agree to
        these terms, you are not permitted to use the Software.
      </p>
      <h2>2. Ownership</h2>
      <p>
        The Software and all related intellectual property rights, including but
        not limited to copyrights, trademarks, and trade secrets, are the
        property of the Company or the Company's suppliers. You are not
        permitted to copy, modify, distribute, sell, or create derivative works
        from the Software.
      </p>
      <h2>3. Restrictions on Use</h2>
      <p>You are not permitted to:</p>
      <ul>
        <li>
          Disassemble, reverse engineer, or translate the Software into source
          code.
        </li>
        <li>Use the Software for illegal purposes.</li>
        <li>
          Use the Software on multiple devices unless permitted by the Company.
        </li>
      </ul>
      <h2>4. Updates and Patches</h2>
      <p>
        The Company may provide updates, patches, or other changes to the
        Software without prior notice. Updates will be subject to the terms of
        this Agreement unless otherwise specified by the Company.
      </p>
      <h2>5. Disclaimer of Warranties</h2>
      <p>
        The Software is provided "as is" without any warranties, including but
        not limited to warranties of merchantability, fitness for a particular
        purpose, or non-infringement of intellectual property rights.
      </p>
      <h2>6. Limitation of Liability</h2>
      <p>
        In no event shall the Company be liable for any damages arising from the
        use or inability to use the Software, including but not limited to
        direct, indirect, incidental, consequential, or other damages, even if
        the Company has been advised of the possibility of such damages.
      </p>
      <h2>7. Termination</h2>
      <p>
        This Agreement shall remain in effect until terminated. The Company may
        terminate this Agreement at any time if you violate its terms. Upon
        termination, you must cease all use of the Software and uninstall the
        Software from your device.
      </p>
      <h2>8. General Terms</h2>
      <p>
        If any provision of this Agreement is found to be invalid or
        unenforceable, that provision shall be modified or removed as necessary,
        and the remaining provisions shall continue in full force and effect.
      </p>
      <h2>9. Contact</h2>
      <p>
        If you have any questions regarding this Agreement, please contact the
        Company at <a href="mailto:contact@smob.vn">contact@smob.vn</a>.
      </p>
      <div className="footer">
        <p>
          <strong>SMOB JOINT STOCK COMPANY</strong>
        </p>
      </div>
    </div>
  );
};

export default Terms;
