const TYPE = {
  REGIST: "regist",
};

const registLog = (userName, userId, userPw) => ({
  type: TYPE.REGIST,
  payload: { name: userName, id: userId, pw: userPw },
});

export const action = { registLog };

export const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      return [...state, payload];
    default:
      return state;
  }
};
