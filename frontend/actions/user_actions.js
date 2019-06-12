import * as UserApiUtil from '../util/user_api_util.js';

export const RECEIVE_USER = 'RECEIVE_USER';


const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUser = id => dispatch => {
  UserApiUtil.getUser(id)
    .then(user => (dispatch(receiveUser(user))));
};

export const updateUser = user => dispatch => {
  UserApiUtil.updateUser(user)
    .then(user => (dispatch(receiveUser(user))));
};
