
class ProductManager {
    constructor () {
        this.products = [] 
    }
    
    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){  
        this.products.forEach((prod)=>{
            if(prod.code === code){
                console.log('el codigo', prod.code, 'esta repetido');
            }
        })

        const newProduct = {
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock, 
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            }); 
        }else{
            console.log("Todos los campos son obligatorios")
        }
    }

    getProducts(){
        return this.products
    }

    existe (id) {
        return this.products.find((producto)=> producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id))
        }
    }

const productoNuevo = new ProductManager ()

console.log (productoNuevo.getProducts())
productoNuevo.addProduct("producto prueba1", "Este es un producto prueba1", 200, "Sin Imagen1", "abc123", 15)
productoNuevo.addProduct("producto prueba2", "Este es un producto prueba2", 201, "Sin Imagen2", "abc124", 20)
productoNuevo.addProduct("producto prueba3", "Este es un producto prueba3", 202, "Sin Imagen3", "abc125", 35)
productoNuevo.addProduct("producto prueba6", "Este es un producto prueba6", 205, "Sin Imagen2", "abc126", 16)

console.log(productoNuevo.getProducts())
productoNuevo.addProduct("producto prueba5", "Este es un producto prueba5", 204, "Sin Imagen2", "abc125", 20)
productoNuevo.addProduct("producto prueba4", "Este es un producto prueba4", 203, "Sin Imagen4", "abc123")

productoNuevo.getProductById(2)

productoNuevo.getProductById(8)
