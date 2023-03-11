import {Post} from "../Post/Post";

import style from './Posts.module.css'

export type PostType = {
    id: number,
    message: string,
    image: string,
    time: string,
    sender: string
}

type PostPropsType = {

}

export const Posts: React.FC<PostPropsType> = () => {

    const Posts: PostType[] = [
        {
            id: 1,
            message: 'hello its my first post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:00',
            sender: 'Mikhail'
        },
        {
            id: 2,
            message: 'hello its my second post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:01',
            sender: 'Andrei'
        },
        {
            id: 3,
            message: 'hello its my third post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:22',
            sender: 'Ksenia'
        },

    ]

    return (
        <div className={style.Posts}>
            <span>My posts</span>
            <div>
                <textarea placeholder={'what are you want say'}></textarea>
                <button>add new</button>
            </div>
            {Posts.map((post, index) => {
              return (
                  <Post key={index} PostType={post}/>
              )
            })}

        </div>
    )
}