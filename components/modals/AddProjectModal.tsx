
import React, { useState } from 'react'

export const AddProjectModal = () => {
    const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const handleShow = () => {
    setShowModal(true);
  }
  return (
    <div>AddProjectModal</div>
  )
}
