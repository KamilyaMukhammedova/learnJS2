const getUsers = async (names) => {
  let info = [];

  for(let name of names) {
    let data = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status !== 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    info.push(data);
  }

  return await Promise.all(info);
};