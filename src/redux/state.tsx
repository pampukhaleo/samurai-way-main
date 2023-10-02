import { AddPostAT, ChangePostTextAT, profileDataReducer } from "./profileData-reducer";
import { AddMessageAT, ChangeMessageTextAT, dialogDataReducer } from "./dialogData-reducer";

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
  dialogs: DialogsType[]
  messages: MessageDataType[]
  newMessageText: string
}

export type DialogsType = {
  id: number
  profileName: string
}

export type MessageDataType = {
  id: number
  text: string
}

export type RootStateType = {
  headerButtonsList: HeaderButtonListType[]
  profileData: ProfileDataType
  dialogData: DialogDataType
}

export type StoreType = {
  _state: RootStateType
  _subscriber: () => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
}

export type ActionTypes = AddPostAT | ChangePostTextAT | AddMessageAT | ChangeMessageTextAT

export const store: StoreType = {
  _state: {
    headerButtonsList: [
      { id: 10001, name: 'Profile', href: '/profile' },
      { id: 10002, name: 'Messages', href: '/messages/' },
      { id: 10003, name: 'News', href: '/news' },
      { id: 10004, name: 'Music', href: '/music' },
      { id: 10005, name: 'Settings', href: '/settings' },
    ],
    profileData: {
      name: 'Leo P.',
      birthday: 32,
      city: 'Kyiv',
      education: 'JS',
      website: 'https://github.com/pampukhaleo',
      profilePicture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      posts: [
        { id: 1001, text: 'Hi, my name is Neo', likes: 12 },
        { id: 1002, text: 'Hello, im from Ukraine', likes: 13 },
        { id: 1003, text: 'How are you all doing boys', likes: 14 }
      ],
      postText: ''
    },
    dialogData: {
      dialogs: [
        {
          id: 100,
          profileName: 'Leo',
        },
        {
          id: 101,
          profileName: 'Neo',
        }
      ],
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
        }
      ],
      newMessageText: '',
    },
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
  dispatch(action: ActionTypes) {
    profileDataReducer(this._state.profileData, action)
    dialogDataReducer(this._state.dialogData, action)
    this._subscriber()
  }
}