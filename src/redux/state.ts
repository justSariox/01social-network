export type PostType = {
    id: number,
    message: string,
    image: string,
    time: string,
    sender: string
    likesCount: number
}

export type ContactType = {
    id: number, name: string
}

export type MessagesType = {
    id: number, message: string, icon: string
}
export type ProfilePageType = {
    posts: PostType[]
}

export type DialogsPageType = {
    contacts: ContactType[]
    messages: MessagesType[]
}

export type StateType = {
    DialogsPage: DialogsPageType
    ProfilePage: ProfilePageType
}

const msgIcon = 'https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png'
const ContactList: ContactType[] = [
    {id: 1, name: 'Mikhail'},
    {id: 2, name: 'Ksenia'},
    {id: 3, name: 'Andrei'},
]

const MessagesList: MessagesType[] = [
    {id: 1, message: 'Hi', icon: msgIcon},
    {id: 2, message: 'How are you', icon: msgIcon},
    {id: 3, message: 'Yo', icon: msgIcon},
]
const PostsData: PostType[] = [
    {
        id: 1,
        message: 'hello its my first post',
        image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
        time: '22:00',
        sender: 'Mikhail',
        likesCount: 5
    },
    {
        id: 2,
        message: 'hello its my second post',
        image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
        time: '22:01',
        sender: 'Andrei',
        likesCount: 2
    },
    {
        id: 3,
        message: 'hello its my third post',
        image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
        time: '22:22',
        sender: 'Ksenia',
        likesCount: 999
    }]


export const state: StateType = {
    ProfilePage: {
        posts: [...PostsData]
    },
    DialogsPage: {
        contacts: [...ContactList],
        messages: [...MessagesList]
    }
}