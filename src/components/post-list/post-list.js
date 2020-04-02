import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';
import PostStatusFilter from '../post-status-filter';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => { 
    
       
        const elements = posts.map( (item) => {
            // Простой способ проверки на объект + содержится ли в нем информация
            if ( typeof item === 'object' && isEmpty(item) ){ 

                const {id, ...itemProps} = item;

                return (
                    <li key = {id} className='list-group-item'>
                        <PostListItem 
                                {...itemProps}
                                onDelete = {()=> onDelete(id)}
                                onToggleImportant = {()=>onToggleImportant(id)}
                                onToggleLiked = {()=>onToggleLiked(id)}
                                />  
                    </li>
                ) // теперь каждый пост знает об этих обработчиках событий 
            }
        })
        // console.log(elements);
    
        function isEmpty(obj) {
            for(let key in obj)
            {
                return true;
            }
            return false;
        }
    
        return (
            <ul className="app-list list-group">
               {elements}
            </ul>
        )
    }
    
export default PostList;