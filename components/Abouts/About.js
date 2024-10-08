import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";

const About = () => {
  return (
    <div className="container">
      {AboutData.aboutOne.map((data, index) => (
        <div className="row g-5 align-items-center" key={index}>
          <div className="col-lg-6">
            <div className="thumbnail-wrapper">
              {data.images.map((img) => (
                <div
                  className={`thumbnail image-${img.id} ${img.className}`}
                  key={img.id}
                >
                  <Image
                    data-parallax='{"x": 0, "y": -20}'
                    src={img.image}
                    width={img.width}
                    height={img.height}
                    alt="Education Images"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner pl--50 pl_sm--0 pl_md--0">
              <div className="section-title text-start">
                <span className="subtitle bg-coral-opacity">{data.tag}</span>
                <h2 className="title">
                  {data.title} <br /> {data.subTitle}
                </h2>
              </div>
              <p className="description mt--30">{data.desc}</p>

              {data.children.map((item, innerIndex) => (
                <div className="rbt-feature-wrapper mt--40" key={innerIndex}>
                  <div className="rbt-feature feature-style-1">
                    <div
                      className={`icon ${
                        item.isPrimary
                          ? "bg-primary-opacity"
                          : "bg-pink-opacity"
                      }`}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">{item.title}</h6>
                      <p className="feature-description">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}

            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
