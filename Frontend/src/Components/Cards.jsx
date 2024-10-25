import React from 'react'

function Cards({item}) {
    // console.log(item);
    
  return (
    <>
    <div className='mt-8 my-4 p-4'>
    <div className="card bg-base-100 w-95 shadow-xl hover:scale-105 duration-200 className='dark:bg-slate-900 dark:text-white'">
  <figure>
    <img
      src={item.image}
      alt="Shoes" className='h-[500px] w-[400px] object-cover' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 rounded-full border-[2px] badge badge-outline hover:bg-pink-900 hover:px-3 py-3 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
