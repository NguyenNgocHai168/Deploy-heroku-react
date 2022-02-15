import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { getExtraInforDoctorById } from "../../../services/userService";
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
      extraInfor: {}
    };
  }

  async componentDidMount() {
    if(this.props.DoctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.DoctorIdFromParent);
      if(res && res.errCode === 0) {
        this.setState({
            extraInfor:res.data
        })
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.language !== prevProps.language) {
      
    }
    if(this.props.DoctorIdFromParent !== prevProps.DoctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.DoctorIdFromParent);
      if(res && res.errCode === 0) {
        this.setState({
            extraInfor:res.data
        })
      }
    }
  }

  ShowHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status
    })
  }

  render() {
    let { isShowDetailInfor, extraInfor } = this.state;
    let { language } = this.props;
    console.log("check extra infor : ", extraInfor);
    return (
      <div className="doctor-extra-infor-container">
          <div className="content-up">
              <div className="text-address">
                  <FormattedMessage id="patient.extral-infor-doctor.text-address"/>
              </div>
              <div className="name-clinic">
                {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ''}
              </div>
              <div className="detail-address">
                {extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ''}
              </div>
          </div>
          <div className="content-down">
            {isShowDetailInfor === false &&
              <div className="short-infor">
                <FormattedMessage id="patient.extral-infor-doctor.price"/>
                {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                  <NumberFormat 
                    className="currency"
                    value={extraInfor.priceTypeData.valueVi} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    suffix={'VNĐ'} 
                  />
                }
                {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                  <NumberFormat 
                    className="currency"
                    value={extraInfor.priceTypeData.valueEn} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    suffix={'$'} 
                  />
                }
                
                <span className="detail" onClick={() => this.ShowHideDetailInfor(true)}>
                  <FormattedMessage id="patient.extral-infor-doctor.show-detail"/>     
                </span>
              </div>
            }
              
            {isShowDetailInfor === true &&
              <>
                <div className="title-price">
                  <FormattedMessage id="patient.extral-infor-doctor.price"/>
                </div>
                <div className="Detail-infor">
                  <div className="price">
                      <span className="left">
                        <FormattedMessage id="patient.extral-infor-doctor.price"/>
                      </span>
                      <span className="right">
                      {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI &&
                        <NumberFormat 
                          className="currency"
                          value={extraInfor.priceTypeData.valueVi} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          suffix={'VNĐ'} 
                        />
                      }
                      {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN &&
                        <NumberFormat 
                          className="currency"
                          value={extraInfor.priceTypeData.valueEn} 
                          displayType={'text'} 
                          thousandSeparator={true} 
                          suffix={'$'} 
                        />
                      }
                      </span>
                  </div>
                  <div className="note"> 
                    {extraInfor && extraInfor.note ? extraInfor.note : ''}
                  </div>
                </div>
                <div className="payment">
                  <FormattedMessage id="patient.extral-infor-doctor.payment"/>
                  {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.VI 
                    ? extraInfor.paymentTypeData.valueVi : ''}
                  {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.EN 
                    ? extraInfor.paymentTypeData.valueEn : ''}
                </div>
                <div className="hide-price">
                  <span onClick={() => this.ShowHideDetailInfor(false)}>
                    <FormattedMessage id="patient.extral-infor-doctor.hide-price"/>
                  </span>
                </div>
              </>
            }
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
