import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    
    return (
      <div className="section-share section-about">
         <div className="section-about-header">
            Truyền Thông Nói Gì Về Booking care IT
         </div>
         <div className="section-about-content">
            <div className="content-left">
            <iframe width="100%" height="400px" 
                src="https://www.youtube.com/embed/dxnukSns7Mo" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
            </div>
            <div className="content-right">
                <p>
                    Chào Mừng Các Bạn Đến Với trang web của chúng tôi ,
                    Hello Hello Hãy chọn 1 trng những bệnh viện uy tín để được chăm sóc an toàn nhất.
                    Chào Mừng Các Bạn Đến Với trang web của chúng tôi ,
                    Hello Hello Hãy chọn 1 trng những bệnh viện uy tín để được chăm sóc an toàn nhất.
                </p>
            </div>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
