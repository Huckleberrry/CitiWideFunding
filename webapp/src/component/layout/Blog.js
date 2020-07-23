import React from 'react'

export const Blog = () => {
    return (
        <div>
                  <section id="blog" class="blog flex-columns flex-reverse">
        <div class="row">
          <div class="column">
            <div class="column-1">
              <img src="images/home/blog.jpg" alt="" />
            </div>
          </div>
          <div class="column">
            <div class="column-2 bg-secondary">
              <h4>April 23 2020</h4>
              <h2>Real-Estate in 2020</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href="blog.html" class="btn btn-outline">
                <i class="fas fa-chevron"></i>
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}


export default Blog