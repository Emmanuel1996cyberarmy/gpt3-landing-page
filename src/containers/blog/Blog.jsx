import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>We blog about happenings</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="01 November 2024" title="will the future of tech be led by AI? Let us explore"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="01 November 2024" title="will the future of tech be led by AI? Let us explore"/>
          <Article imgUrl={blog03} date="01 November 2024" title="will the future of tech be led by AI? Let us explore"/>
          <Article imgUrl={blog04} date="01 November 2024" title="will the future of tech be led by AI? Let us explore"/>
          <Article imgUrl={blog05} date="01 November 2024" title="will the future of tech be led by AI? Let us explore"/>
        </div>
      </div>

    </div>
  )
}

export default Blog