export const login = user => {
  return (
    $.ajax({
      url: 'api/user_sessions',
      method: 'POST',
      data: { user }
    })
  );
};

export const signup = user => {
  return (
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: { user }
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      url: 'api/user_sessions',
      method: 'DELETE'
    })
  );
};
