import React from 'react'

export default function Post({post}) {
  return (
    <div>
    {post.map(p=>{ 
return (<div>
<li>{p.id}</li>
<li>{p.title}</li>
<li>{p.body}</li>
</div>)
})}
    </div>
  )
}
