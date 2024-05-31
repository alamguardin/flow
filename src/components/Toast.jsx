function toast(text) {
    const toastElement = document.querySelector('#toast .toast-item')
    toastElement.textContent = text
    toastElement.classList.add('active')

    setTimeout(() => {
        toastElement.classList.remove('active')
    }, 2000)
}

function Toaster() {
    return (
        <div className="toast-container" id="toast">
            <div className="toast-item">
                Hello World
            </div>
        </div>
    )
}
export { Toaster, toast }