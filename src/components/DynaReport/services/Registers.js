export const getUserRepos = (filter) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${filter}/repos`)
      .then((data) => data.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
