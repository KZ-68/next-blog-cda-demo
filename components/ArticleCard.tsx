import React from 'react'
import { formatDate } from '@/lib/utils'
import Button from './Button'

const ArticleCard:React.FC<any> = ({article}) => {
    return (
        <div className='group border border-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:translate-y-2 duration-300' key={article.id}>
            {/* Titre de l'article */}
            <h2 className='text-2xl md:text-xl font-bold'>{article.title}</h2>
            <p className='text-sm text-slate-300'>{formatDate(article.createdAt)} {formatDate(article.createdAt)}</p>
            <div className='flex flex-wrap gap-2 my-4'>
                {article.tags.map((tagArticle:any)=> (
                    <span className='group: px-3 py-2 text-xs rounded-full bg-slate-600 group-hover:bg-pink-600 duration-500' key={tagArticle.tag.id}>
                        {tagArticle.tag.name}
                    </span>
                ))}
            </div>
            
            {/* Texte de l'article */}
            <p className='line-clamp-4'>{article.text}</p>

            <Button href="https://google.fr" label="Lire plus..."/>
        </div>
    )
}

export default ArticleCard