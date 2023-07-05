import React from 'react'
import { PostBody } from '@/types'
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";

const PostContent = ({ content }: { content: PostBody }) => {

  return (
    <div>
      {
        content.map(item => {

          if (item._type === 'block') return (
            <p></p>
          )

        })
      }
    </div>
  )
}

export default PostContent