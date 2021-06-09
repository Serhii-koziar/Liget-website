export function initFilter() {
  const categories = document.querySelectorAll('.filter-section__categories a')
  const posts = document.querySelectorAll('.filter-section__item')
  const categoriesData = document.querySelectorAll('[data-filter]')
  const categoriesActive = document.querySelectorAll('.filter-section__categories a.active')
  console.log(categoriesActive.length)
  if (categoriesActive.length === 0) {
    posts.forEach((post) => {
      post.classList.add('active')
    })
  }
  // categories.forEach((category) => {
  //   const categoryId = category.dataset.filter
  //   category.addEventListener('click', () => {
  //     category.classList.add('active')
  //     if (category.classList.contains('active')) {
  //       posts.forEach((post) => {
  //         if (categoryId === post.dataset.filter) {
  //           post.classList.add('active')
  //         } else {
  //           post.classList.remove('active')
  //         }
  //       })
  //     } else {
  //       category.classList.remove('active')
  //       posts.forEach((post) => {
  //         if (categoryId === post.dataset.filter) {
  //           post.classList.remove('active')
  //         }
  //       })
  //     }
  //   })
  // })
  categories.forEach((category) => {
    const categoryId = category.dataset.filter
    category.addEventListener('click', () => {
      categories.forEach((category) => {
        if (category.dataset.filter === categoryId) {
          category.classList.toggle('active')
        } else {
          category.classList.remove('active')
        }
      })

      posts.forEach((post) => {
        if (category.classList.contains('active')) {
          if (categoryId === post.dataset.filter) {
            post.classList.add('active')
          } else {
            post.classList.remove('active')
          }
        } else {
          post.classList.add('active')
        }
      })
    })
  })
}
