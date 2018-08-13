import async from 'async'

const Server = {
  async getInfo() {
    const response = await fetch('http://localhost:3010/info', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    })
    return response.json()
  },

  waitForServerStart(done) {
    let info
    async.until(
      () => info && info.started,
      next => {
        this.getInfo()
          .then(data => {
            info = data
            setTimeout(next, 100)
          })
          .catch(next)
      },
      done
    )
  }
}

export default Server
