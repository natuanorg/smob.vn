import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";
import "./index.css";
const GenArtTerms = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20">
          <div class="article">
            <h1 itemprop="headline">Terms of Service</h1>
            <div itemprop="articleBody" class="article-body">
              <p>
                An updated version of our Terms of Service takes effect on March
                2023. You can read the updated Terms of Service below. These
                terms and conditions are governed by the laws of United States.
              </p>
              <p>
                Welcome to GenArt. By accessing this website, you agree to
                comply with and be bound by the following terms and conditions.
                GenArt reserves the right to change these terms and conditions,
                and the products, services, prices, and programs mentioned on
                its site at any time, as well as seek all remedies in law and in
                equity for any violation of these terms and conditions.
              </p>
              <h3>Refund Policy</h3>
              <p>
                If you are not satisfied with your purchase within 7 days of
                receipt, you may contact and we will issue a refund.
              </p>
              <p>
                GenArt has the right to modify the content of paid plans and
                charge for the services which are offered for free now. We may
                notify you of the modification of paid plans at relevant pages
                before action. You can stop using the services anytime if you
                disagree.
              </p>
              <h3>Copyright</h3>
              <p>
                This website and its materials (including, but not limited to
                texts, graphics, logos, sounds, and software) are the
                copyrighted material of GenArt. All rights reserved.
              </p>
              <p>
                No part of this publication may be reproduced, distributed, or
                transmitted in any form or by any means, including photocopying,
                recording, or other electronic or mechanical methods, without
                the prior written permission of GenArt excluding the following
                situations:
              </p>
              <ol>
                <li>
                  You may print or download extracts to a local hard disk for
                  your personal and non-commercial use only.
                </li>
                <li>
                  You may copy the content to individual third parties for their
                  personal use, but only if you acknowledge the website as the
                  source of the material.
                </li>
              </ol>
              <h3>Indemnity</h3>
              <p>
                You hereby indemnify to the fullest extent of GenArt from and
                against any and all liabilities, costs, demands, causes of
                action, damages, and expenses (including reasonable attorney’s
                fees) arising out of or in any way related to your breach of any
                of the provisions of these Terms.
              </p>
              <h3>Disclaimer</h3>
              <p>
                Although every precaution has been taken in advance in order to
                verify the accuracy of the information contained herein, neither
                we nor any third parties provide any warranty or guarantee the
                accuracy, timeliness, performance, completeness, or suitability
                of the information, materials, and software found or offered on
                this website for any particular purpose. You acknowledge that
                such information and materials may contain inaccuracies or
                errors and we expressly exclude liability for any of such
                inaccuracies or errors to the fullest extent permitted by law.
              </p>
              <p>
                You may use any information, materials, or software on this
                website which is entirely at your own risk. It shall be your own
                responsibility to ensure that any products, services, or
                information available through this website meet your specific
                requirements.
              </p>
              <p>
                Some contents on our webpage are originated from the Internet,
                and they are only presented for display exclusively. All rights
                are reserved by the authors. May this content violates any of
                your rights, kindly advise us in writing to act on your behalf.
                We shall delete your documents without hesitation and delay.
              </p>
              <h3>Links to Other Websites</h3>
              <p>
                Our Service may contain links to third-party websites or
                services that are not owned or controlled by GenArt.
              </p>
              <p>
                We have no control over and assume no responsibility for, the
                content, privacy policies, or practices of any third-party
                websites or services. Therefore, you are fully responsible for
                yourself during browsing third-party websites for encountering
                any risks.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and
                privacy policies of any third party websites or services that
                you visit.
              </p>
              <h3>Download Software</h3>
              <p>
                GenArt makes certain software products available via the GenArt
                website. Although you are free to download any software
                presented there, you are not allowed to reproduce or
                redistribute it. The license for the software is governed by the
                laws of China and the laws of your country.
              </p>
              <h3>Feedback</h3>
              <p>
                We always value hearing from our users whether they have any
                questions, expectations, or comments, and are always interested
                in learning about your suggestions which can promote us to make
                our software better. If you choose to submit comments, ideas, or
                feedback, you agree that we are free to use them without any
                restriction or compensation to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GenArtTerms;
