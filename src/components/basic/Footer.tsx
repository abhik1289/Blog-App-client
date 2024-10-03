import React from "react";
import socialMediaList from "@/constants/socialIcons";
function Footer() {
  return (
    <div className="main_wrapper bg-[#ecf0f1] py-4">
      <div className="container_box w-10/12 mx-auto">
        <div className="text_content_footer flex justify-between">
          <div className="text">
            <p>Design & Developed By Abhik</p>
          </div>
          <div className="socials_icons flex gap-2">
            {socialMediaList.map((item, index) => {
              return (
                <div className="social_media_box">
                  <div
                    className="icon cursor-pointer hover:scale-110 transition-all 
                  text-[#95a5a6]
                  hover:text-[#2c3e50]"
                    key={index}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
