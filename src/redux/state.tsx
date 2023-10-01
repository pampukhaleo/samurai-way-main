export type ProfileDataType = {
  name: string
  birthday: number
  city: string
  education: string
  website: string
  profilePicture: string
  posts: Posts[]
  postText: string
}

type Posts = {
  id: number
  text: string
  likes: number
}

export type HeaderButtonListType = {
  name: string
  href: string
  id: number
}

export type DialogDataType = {
  id: number
  profileName: string
}

export type MessageDataType = {
  id: number
  messages: MessagesType[]
}

type MessagesType = {
  id: number
  text: string
}

export type RootStateType = {
  headerButtonsList: HeaderButtonListType[]
  profileData: ProfileDataType
  dialogData: DialogDataType[]
  messageData: MessageDataType[]
}

export type StoreType = {
  _state: RootStateType
  _subscriber: () => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
  addPost: () => void
  changePostText: (text: string) => void
}

export const store: StoreType = {
  _state: {
    headerButtonsList: [
      { id: 1, name: 'Profile', href: '/profile' },
      { id: 2, name: 'Messages', href: '/messages/' },
      { id: 3, name: 'News', href: '/news' },
      { id: 4, name: 'Music', href: '/music' },
      { id: 5, name: 'Settings', href: '/settings' },
    ],
    profileData: {
      name: 'Leo P.',
      birthday: 32,
      city: 'Kyiv',
      education: 'JS',
      website: 'https://github.com/pampukhaleo',
      profilePicture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      posts: [
        { id: 1, text: 'Hi, my name is Neo', likes: 12 },
        { id: 2, text: 'Hello, im from Ukraine', likes: 13 },
        { id: 3, text: 'How are you all doing boys', likes: 14 }
      ],
      postText: ''
    },
    dialogData: [
      {
        id: 1,
        profileName: 'Leo',
      },
      {
        id: 2,
        profileName: 'Neo',
      },
    ],
    messageData: [
      {
        id: 1,
        messages: [
          {
            id: 1,
            text: 'textte xttext text qwqweqwe qwe qwasd asdzxcz asdqwe dazscz qaweqwe dsad eqwe'
          },
          {
            id: 2,
            text: 'text1'
          },
          {
            id: 3,
            text: 'text2'
          },
          {
            id: 4,
            text: 'text3'
          }]
      },
      {
        id: 2,
        messages: [
          {
            id: 5,
            text: 'textte xttext text qwe qwasd asdzxcz asdqwe dazscz qaweqwe dsad eqwe'
          },
          {
            id: 6,
            text: 'text4'
          },
          {
            id: 7,
            text: 'text5'
          },
          {
            id: 8,
            text: 'text6'
          }]
      },
      {
        id: 3,
        messages: [
          {
            id: 6,
            text: 'textte xttext text qwe qwasd asdzxcz asdqw dsad eqwe'
          },
          {
            id: 7,
            text: 'text4text4'
          },
          {
            id: 8,
            text: 'text5text5'
          },
          {
            id: 9,
            text: 'text6text6'
          }]
      },
    ]
  },
  _subscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },
  addPost() {
    const newPost = {
      id: 5,
      text: this._state.profileData.postText,
      likes: 0
    }
    this._state.profileData.posts.push(newPost)
    this._state.profileData.postText = ''
    this._subscriber()
  },
  changePostText(text: string) {
    this._state.profileData.postText = text
    this._subscriber()
  }
}