export const getUser = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${id}`
    })
  );
};

export const updateUser = user => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/users/${user.id}`,
      contentType: false,
      processData: false,
      dataType: "json",
      data: user
    })
  );
};
