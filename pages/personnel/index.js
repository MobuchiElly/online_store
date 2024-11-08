import React, { useState } from 'react';
import axios from 'axios';

const UpdateProductForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sizes, setSizes] = useState('');
    const [colors, setColors] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const productId = "66f5def3ae6b909dfc305cc5";
    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('sizes', sizes);
        formData.append('colors', colors);
        formData.append('stockQuantity', stockQuantity);
        
        if (image) {
            formData.append('images', image);
        }
        console.log("form data:", formData);
        setLoading(true);

        try {
            const response = await axios.put(
                `http://localhost:7000/api/v1/${productId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            setSuccessMessage('Product updated successfully!');
            setError('');
        } catch (error) {
            setError('Failed to update product');
            setSuccessMessage('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Product</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sizes" className="block text-sm font-medium text-gray-700">Sizes</label>
                    <input
                        type="text"
                        id="sizes"
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="colors" className="block text-sm font-medium text-gray-700">Colors</label>
                    <input
                        type="text"
                        id="colors"
                        value={colors}
                        onChange={(e) => setColors(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                    <input
                        type="number"
                        id="stockQuantity"
                        value={stockQuantity}
                        onChange={(e) => setStockQuantity(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleFileChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full p-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500'}`}
                    disabled={loading}
                >
                    {loading ? 'Updating...' : 'Update Product'}
                </button>
            </form>
        </div>
    );
};

export default UpdateProductForm;
