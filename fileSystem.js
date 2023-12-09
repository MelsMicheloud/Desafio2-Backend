import { promises as fs } from "fs"


class ProductManager {
    constructor (){
        this.path = "./productos.txt"
        this.prod = [] 
    }

    static id = 0


    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++

        let newProduct = {
            id: ProductManager.id,
            title,
            description,
            price, 
            thumbnail,
            code,
            stock
        }
        this.prod.push(newProduct)

        await fs.writeFile(this.path, JSON.stringify(this.prod))
    };

    readProducts = async () => {
        let result = await fs.readFile(this.path, "utf-8")
        return JSON.parse(result)
    }
    getProducts = async () => {
        let results = await this.readProducts()
        return console.log(results)
    }


getProductById = async (id) => { 
    let resultId = await this.readProducts()
    !resultId.find(product => product.id === id)? console.log('404- Not Found'): console.log(resultId.find((product) => product.id === id));
    }

    deleteProduct = async (id) => {
        let resultId = await this.readProducts();
        let productFilter = resultId.filter(products => productos.id != id)
        await fs.writeFile (this.path, JSON.stringify(productFilter))
        console.log('producto Eliminado')
    };

    updateProducts = async ({id, ...productos}) =>{
        await this.deleteProduct(id);
        let produtOld = await this.readProducts()

        let productMod = [{id, ...productos}, ...produtOld];
        await fs.writeFile(this.path,JSON.stringify(productMod));
    };
}

const productos = new ProductManager

productos.addProduct("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25 )
productos.addProduct("producto2 prueba", "Este es un producto prueba2", 300, "sin imagen", "abc1234", 80 )


productos.getProducts()
productos.getProductById(3)
productos.deleteProduct(1)

productos.updateProducts({
            title: "producto Modificado",
            description: "Este es un producto modificado",
            price: 4500,
            thumbnail: "sin imagen",
            code: 'abc1123',
            stock:5,
            id: 2
    })