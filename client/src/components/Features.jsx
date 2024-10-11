import React from "react";

const Features = () => {
  const features = [
    {
      img: "/images/feature 1.png",
      nameH1: "High Quality",
      txt1: "Lorem ipsum dolor",
      txt2: "Lorem ipsum dolor",
    },
    {
      img: "/images/feature 2.png",
      nameH1: "Awesome Design",
      txt1: "Lorem ipsum dolor",
      txt2: "Lorem ipsum dolor",
    },
    {
      img: "/images/feature 3.png",
      nameH1: "Latest Technology",
      txt1: "Lorem ipsum dolor",
      txt2: "Lorem ipsum dolor",
    },
    {
      img: "/images/feature 4.png",
      nameH1: "User Friendly",
      txt1: "Lorem ipsum dolor",
      txt2: "Lorem ipsum dolor",
    },
  ];
  return (
    // <!-- features -->
    <div id="product-features">
      <div className="wrapper">
        <div className="features-content">
          <div className="h1-disc">
            <h1 className="feature-h1">Product Features</h1>
            <p className="feature-disc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              alias ut incidunt illo laboriosam.
            </p>
          </div>
          <div className="features">
            {features.map((ft, i) => (
              <div className="feature" key={i}>
                <div className="feature-img">
                  <img src={ft.img} alt="" />
                </div>
                <div className="feature-disc">
                  <p className="feature-disc-h1">{ft.nameH1}</p>
                  <p className="feature-disc-text">{ft.txt1}</p>
                  <p className="feature-disc-text">{ft.txt2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    //  {/* <!-- /features --> */}
  );
};

export default Features;
