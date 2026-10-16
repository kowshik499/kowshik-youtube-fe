import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col pt-2 pb-2 shadow-md'>
        <div className='flex flex-row'>
            <img className='h-6 pr-1 pl-1' alt='menu' src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'/>
            <img className='h-6' alt='icon' src='https://www.ellisandhiggs.com/wp-content/uploads/2020/05/yt_logo_rgb_light-768x172.png' />
        </div>
        <div className='w-1/2 flex flex-row justify-center'>
            <input className="border rounded-l-full" type='search' placeholder=''/>
            <button className='bg-gray-300 p-1 rounded-r-full'>search</button>
        </div>
        <div className="flex flex-row justify-end">
          <img className="h-5 bg-none pr-1" alt='notifications' src='https://tse1.mm.bing.net/th/id/OIP.Iz8VVs82vbRIEBrY_P6mjAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' />
          <img className="h-5" alt='profile' src='https://www.pngmart.com/files/23/Profile-PNG-Photo.png' />
        </div>
    </div>
  )
}

export default Head