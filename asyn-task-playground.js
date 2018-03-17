/**
 * A simple demonstration of how to use promise and await/async
 */


/**
 *author: Meshileya Seun <meshileyaseun@gmail.com/> 3/16/18
 * */


/**
 *
 * @param delay
 * @returns {Promise<any>}
 */
function timeOut(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

/**
 * simulate a fetch of 100 users from the server
 */
function simulateUserGeneration() {
  const usersList = [];

  for (let i = 0; i < 100; i++) {
    const userObject = {
      name: `user ${i}`,
      sex: ['Male', 'Female'][Math.floor(Math.random() * 2)],
    };

    usersList.push(userObject);
  }
  return usersList;
}


/**
 * get users from the server and manipulate it
 */
function getUsersFromServer() {
  return new Promise(resolve => {
    timeOut(5000)
      .then(() => {
        const userList = simulateUserGeneration()
          .map(userObject => Object.assign(
            userObject,
            { property: `You are human${userObject.name}` }));
        resolve(userList);
      });
  });
}

/**
 * resolve users => access users from promise
 */
getUsersFromServer()
  .then(users => {
    // console.log(users);
  });


/** **********************************************************
 * user async/await for the above snippet where necessary ***
 ************************************************************
 */
async function asyncUser() {
  return await getUsersFromServer();
}

asyncUser().then(users => console.log(users));
