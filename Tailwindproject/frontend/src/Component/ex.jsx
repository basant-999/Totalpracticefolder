import React from 'react'

const ex = () => {
  return (
         <div className="fixed inset-0 bg-[rgba(54,54,54,0.44)]  flex justify-center items-center z-50 shadow-[0px_1px_14.9px_0px_rgba(255,255,255,0.83)]">
      <div className="bg-white rounded-2xl shadow-[0px_1px_14.9px_0px_rgba(255,255,255,0.83)] w-[400px] max-w-[90%] p-6 relative">
        {/* Close Button */}
        <button
        //   onClick={onClose}
          className="absolute top-4 right-6 text-[30px] text-[rgba(43,53,177,1)] hover:text-gray-700  mt-1"
        >
          {/* <X stroke="#2B35B1" size={35}/> */}
        </button>

        {/* Title */}
        <h2 className="Delete-list  font-roboto mb-4">
          Delete Vehicle
        </h2>

        <hr className="mb-4" />

        {/* Message */}
         <p className="text-center Delete-list-paragrap font-roboto mb-6">
          Are you sure you want to delete the selected vehicle from the list?
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            // onClick={onConfirm}
            className="w-full py-2 bg-[rgba(244,67,54,1)] font-roboto text-[rgba(255,255,255,1)] rounded-lg hover:bg-red-600 font-medium"
          >
            Delete
          </button>
          <button
            // onClick={onClose}
            className="w-full py-2 cencle-btn "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ex