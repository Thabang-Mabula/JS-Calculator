const messageModal = document.getElementById("message-modal")
const messageModalHeading = document.getElementById("modal-heading")
const messageModalBody = document.getElementById("modal-text")

const ERROR_MESSAGE_CLASS = "error-message-modal"
const ERROR_MESSAGE_HEADING = "Error"
/**
 * Display an error to the user
 * @param {Error} error Error to be displayed to the user
 */
export const displayError = (error) => {
    messageModalHeading.textContent = ERROR_MESSAGE_HEADING
    messageModalBody.textContent = error.message
    messageModal.className = ERROR_MESSAGE_CLASS
    messageModal.showModal()
}

