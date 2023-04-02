
import Product, { IProduct } from "../models/Products";
import { ObjectId } from "mongodb";


export async function getProductsServices() {
    try {
        return await Product.find();
    } catch (error) {
        // Log Errors
        throw new Error(error as string);

    }
}

export async function getProductServices(id: ObjectId) {
    try {
        return await Product.findOne({ _id: id });
    } catch (error) {
        // Log Errors
        throw new Error(error as string);
    }
}

export async function createProductServices(product: IProduct) {
    try {
        await product.save();
        return product;
    } catch (error) {
        // Log Errors
        throw new Error(error as string);

    }
}

export async function updateProductServices(id: ObjectId, product: IProduct) {
    try {
        await Product.findOneAndUpdate({ _id: id }, product);
        return product;
    } catch (error) {
        // Log Errors
        throw new Error(error as string);

    }
}

export async function deleteProductServices(id: ObjectId) {
    try {
        return await Product.findOneAndRemove({ _id: id });
    } catch (error) {
        // Log Errors
        throw new Error(error as string);

    }
}