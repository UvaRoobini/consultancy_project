import { useState, useContext } from "react"
import { Link } from "react-router-dom"

const data = {
  "products": [
    {
      "id": 1,
      "name": "Solar Panel Type A",
      "desc": "Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy.",
      "small": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      "large": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
      "id": 2,
      "name": "Solar Panel Type B",
      "desc": "Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud.",
      "small": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg",
      "large": "https://www.lightinus.com/wp-content/uploads/2019/05/Solar-Panels-Lightinus.jpg"
    },
    {
      "id": 3,
      "name": "Solar Panel Type C",
      "desc": "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me.",
      "small": "https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg",
      "large": "https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg"
    },
    {
      "id": 4,
      "name": "Solar Panel Type D",
      "desc": "Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful.",
      "small": "https://www.cnet.com/a/img/resize/81788f2ae4efa7e94fcff638d239514c773f8e5a/hub/2022/09/23/a8c58723-325f-40d8-8811-79173019d115/gettyimages-169938731.jpg?auto=webp&fit=crop&height=675&width=1200",
      "large": "https://www.cnet.com/a/img/resize/81788f2ae4efa7e94fcff638d239514c773f8e5a/hub/2022/09/23/a8c58723-325f-40d8-8811-79173019d115/gettyimages-169938731.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      "id": 1,
      "name": "Solar Panel Type E",
      "desc": "Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy.",
      "small": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      "large": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    }
  ]
}


export default function FetchProducts() {
  const [items] = useState(data)

  return (
    <>
      <section className="px-5 py-10 lg:py-20 xl:max-w-6xl xl:mx-auto grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20" style = {{backgroundColor:"white",color:"black"}}>
        <h2 style={{fontSize:"40px",textAlign:"center",fontWeight:"600"}}>Our Products</h2>
        {items.products.map(({ id, name, desc, small, large }) => (
          <article
            key={id}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center lg:gap-10 xl:gap-20"
          >
            <div>
              <picture>
                <source media="(min-width: 768px)" srcSet={large} />
                <img src={small} alt={name} />
              </picture>
            </div>

            <div>
              <h2 className="font-bold text-4xl mb-5">{name}</h2>
              <p className="text-grey-300 mb-10">{`${desc.substring(
                0,
                200
              )}...`}</p>
              <ul className="flex items-center justify-between">
                <li>
                  <Link
                    to={`/`}
                   // to={`/${name}`}
                    className="bg-black  py-2 px-4" style={{color:"white"}} 
                  >
                    More Details
                  </Link>
                </li>
                {/* Comment here <li>
                  <button
                    onClick={handleOpenCart}
                    className="bg-black  py-2 px-4" style={{color:"white"}}>
                    Add to Cart
                  </button>
              </li> */}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
