export function List({ products }) {
    return (
        <ul>

            {
                products.map(product =>
                    <div className="row">
                        
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{product.id}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{product.title}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        
                    </div>
                )
            }

        </ul>
    )
}