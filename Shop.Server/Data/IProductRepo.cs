using Shop.Server.Models;

namespace Shop.Server.Data
{
    public interface IProductRepo
    {
        Task<Product> AddProductAsync(Product product);
        Task<bool> DeleteProductAsync(Guid id);
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(Guid id);
        Task<Product> UpdateProductAsync(Product product);
    }
}