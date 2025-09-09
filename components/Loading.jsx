import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-[70vh]">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-600" style={{ borderTopColor: 'rgba(38, 242, 172, 0.96)' }}></div>
        </div>
    )
}

export default Loading