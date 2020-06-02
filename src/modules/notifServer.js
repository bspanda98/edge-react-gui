// @flow
class NotifServer {
  uri: string
  version: string
  apiKey: string

  constructor (version) {
    // eslint-disable-next-line
    this.uri = __DEV__ ? 'http://192.168.148.179:8087' : 'https://info1.edgesecure.co:8444'
    this.version = version
    this.apiKey = '8d98d37244c4d6d67c7a74077700d3a7'
  }

  async get (path) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      headers: {
        'X-Api-Key': this.apiKey
      }
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }

  async post (path, body) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(body)
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }

  async put (path, body) {
    const response = await fetch(`${this.uri}/v${this.version}/${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiKey
      },
      body: JSON.stringify(body)
    })
    if (response != null) {
      const result = await response.json()
      return result
    }
  }
}

export const notif1 = new NotifServer(1)
