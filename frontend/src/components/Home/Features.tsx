import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Features</div>
      <div className="title-small">
        {/* lorem ipsum dosa is posa and gosa is the best thing i can come up with */}
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immuatable" icon={<MdLock />} align="right">
            <p>
              {/* Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network. */}
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile-vote.png" />
        </div>

        <div>
          <Feature title="Secure" icon={<MdGppGood />} align="left">
            <p>
              {/* Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network. */}
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
              {/* Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network. */}
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Trustful"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
              {/* Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network. */}
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
