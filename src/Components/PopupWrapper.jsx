import React from 'react'

const PopupWrapper = () => {
  return (
    <div>
      <Popup open={isOpen}
        closeOnDocumentClick={false}
        onClose={() => { setIsOpen(false) }}
        contentStyle={popupContentStyle}
      ></Popup>
    </div>
  )
}

export default PopupWrapper
