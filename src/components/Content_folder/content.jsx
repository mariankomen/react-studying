import React from 'react';
import classes from './content.module.css';
import Post from "./post_file/post";
import Post_Add from "./post_file/post_adding/post_adding";

const Content = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNrmMSXvdm5IJJ6FE4en629wK3qHp4Dacyw&usqp=CAU'/>

            </div>
            <div className='photo_2'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgLgZpn9pg5mBoh2IjJJY7VJhbkWBb2Z37w&usqp=CAU'/>

                ava + descr
                nuxai bebry sosok
            </div>
            <Post_Add/>
            <Post name='Oleg' like='23' cont='hello, my name is oleg'/>
            <Post name='Sasha' like='2'
                  cont='Василь Щур, співає пісню мамина світлиця. Скільки себе памятаю завжди світило мені, світло в саду і розмаю і рушники на стіні ііі і рушники на стіні'/>
            <Post name='Marian' surname=' Lyzhychka' cont='Всем привет, сегодня ми будем строить монастирь'/>
        </div>
    );
}

export default Content;