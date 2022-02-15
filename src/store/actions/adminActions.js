import actionTypes from './actionTypes';
import { getAllcodeService, 
         createAddNewUserService, 
         getAllUsers,
         deleteUserService, editUserService, 
         getTopDoctorHomeService, getAllDoctors,
         saveDetailDoctorService,
         getAllSpecialty,getAllClinic} from '../../services/userService';
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
//--------------gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START})

            let res = await getAllcodeService("GENDER");
            if(res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }else{
                dispatch(fetchGenderFaided());
            }
        } catch (e) {
            dispatch(fetchGenderFaided());
            console.log('fetch Gender Start error', e);
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})
//----------------positions
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START})

            let res = await getAllcodeService("POSITION");
            if(res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            }else{
                dispatch(fetchPositionFaided());
            }
        } catch (e) {
            dispatch(fetchPositionFaided());
            console.log('fetch Position Start error', e);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data:positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSTTION_FAILDED
})
//----------------Role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_GENDER_START})

            let res = await getAllcodeService("ROLE");
            if(res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            }else{
                dispatch(fetchRoleFaided());
            }
        } catch (e) {
            dispatch(fetchRoleFaided());
            console.log('fetch Role Start error', e);
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data:roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})

// create New user 
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createAddNewUserService(data);
            if(res && res.errCode === 0) {
                toast.success("Create a new user success :))");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                toast.error("Create the user success :))");
                dispatch(saveUserFaided());
            }
        } catch (e) {
            dispatch(saveUserFaided());
            console.log('saveUserFaided error', e);
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
export const saveUserFaided = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})
// -----EDIT user 
export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if(res && res.errCode === 0) {
                toast.success("Update the user success :))");
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                toast.error("Update the user success :))");
                dispatch(editUserFaided());
            }
        } catch (e) {
            dispatch(editUserFaided());
            console.log('editUserFaided error', e);
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFaided = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})
// -----DELETE user 
export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if(res && res.errCode === 0) {
                toast.success("Delete the user success :))");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            }else{
                toast.error("Delete the user error :))");
                dispatch(deleteUserFaided());
            }
        } catch (e) {
            dispatch(deleteUserFaided());
            console.log('deleteUserFaided error', e);
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFaided = () => ({
    type: actionTypes.DELETE_USER_FAILDED
})

//----------------All User
export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("All");
            if(res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()));
            }else{
                dispatch(fetchAllUserFaided());
            }
        } catch (e) {
            dispatch(fetchAllUserFaided());
            console.log('fetchAllUserFaided error', e);
        }
    }
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users:data
})

export const fetchAllUserFaided = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILDED
})


//----------------fetch Top Doctor
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })
            }
            
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILDED:', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
        }
    }
}


//----------------fetch ALL Doctor
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
                })
            }
            
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILDED:', e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILDED
            })
        }
    }
}


//----------------Save Doctor
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if(res && res.errCode === 0) {
                toast.success("Save Infor Detail Doctor success :))");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            }else {
                toast.error("Save Infor Detail Doctor error :))");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
                })
            }
            
        } catch (e) {
            toast.error("Save Infor Detail Doctor error :))");
            console.log('SAVE_DETAIL_DOCTOR_FAILDED:', e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILDED
            })
        }
    }
}

//----------------fetch ALL Schedule Hours
export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllcodeService("TIME");
            if(res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
                })
            }
            
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILDED:', e);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED
            })
        }
    }
}

//--------------Required Doctor Infor.
export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START})

            let resPrice = await getAllcodeService("PRICE");
            let resPayment = await getAllcodeService("PAYMENT");
            let resProvince = await getAllcodeService("PROVINCE");
            let resSpecialty = await getAllSpecialty();
            let resClinic = await getAllClinic();

            if(resPrice && resPrice.errCode === 0
                && resPayment && resPayment.errCode === 0
                && resProvince && resProvince.errCode === 0
                && resSpecialty && resSpecialty.errCode === 0
                && resClinic && resClinic.errCode === 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resSpecialty: resSpecialty.data,
                    resClinic: resClinic.data
                }
                dispatch(fetchRequiredDoctorInforSuccess(data));
            } else {
                dispatch(fetchRequiredDoctorInforFaided());
            }
        } catch (e) {
            dispatch(fetchRequiredDoctorInforFaided());
            console.log('fetchRequiredDoctorInforFaided error', e);
        }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data:allRequiredData
})

export const fetchRequiredDoctorInforFaided = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILDED
})