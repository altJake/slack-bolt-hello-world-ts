// This is not a real datastore, but it can be if you make it one :)

type StringMap<T = any> = { [index: string]: T }

interface User {
  id: string
  channel: string
}

export default class Store {
  private messages: Partial<StringMap> = {}
  private users: Partial<StringMap<User>> = {}
  private me: string | undefined = undefined
  private defaultChannel: string | undefined = undefined

  getMessages = () => {
    return this.messages
  }

  addUser = (user: User) => {
    this.users[user.id] = user
  }

  getUser = (id: string): User | undefined => {
    return this.users[id]
  }

  setChannel = (channel: string) => {
    this.defaultChannel = channel
  }

  getChannel = () => {
    return this.defaultChannel
  }

  setMe = (id: string) => {
    this.me = id
  }

  getMe = () => {
    return this.me
  }
}
