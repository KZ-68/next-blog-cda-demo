"use client"
import Tag from '@/components/Tag'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ArticleDetailPage = ({params} : {params : {articleId: string}}) => {

    const [article, setArticle] = useState<ArticleWithTagsAndComments | null>(null)

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`/api/article/${params.articleId}`)
            const data : ArticleWithTagsAndComments = await response.json()
            setArticle(data)
        }
        fetchArticle()
    }, [params.articleId])

    return (
        <div>
            <h1 className='mb-3 text-2xl'>{article?.title}</h1>
            <p>{article?.text}</p>
            <div className='my-5 flex flex-wrap'>
                {article?.tags.map((tagArticle: TagArticleType) => (
                    <Tag key={tagArticle.tag.id} text={tagArticle.tag.name}/>
                ))}
            </div>
            <div className='p-4 mt-8 bg-slate-900 rounded-md'>
                <h2 className='mb-4 text-xl'>Les commentaires ({article?.comments.length}) :</h2>
                <ul>
                    {article?.comments && article.comments.length > 0 ? (
                        article?.comments.map((comment: CommentType) => (
                            <li key={comment.id} className='m-5 group border border-slate-500 p-6 rounded-sm'>
                                <h3>{comment.userId}</h3>
                                <p className='text-sm text-slate-300'>{formatDate(article.createdAt)}</p>
                                <p>{comment.text}</p>
                            </li>
                        ))
                    ) : (
                        <p>
                            Aucun commentaire ajouté sur cet article.
                            
                        </p>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ArticleDetailPage