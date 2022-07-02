const visibilityLoadingElement = document.querySelector('#isLoading')

export const loading = () => {
  visibilityLoadingElement.classList.toggle('loading')
}
