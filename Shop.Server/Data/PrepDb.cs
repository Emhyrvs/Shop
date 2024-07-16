
using Microsoft.EntityFrameworkCore;
using Shop.Server.Models;

namespace MallorcaTeslaRentals.Data
{
    public class PrepDbcs
    {
        public static async Task PrepPopulation(IApplicationBuilder app, bool isProduction)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<AppDbContext>();
                await SeedData(context);
            }
        }

        private static async Task SeedData(AppDbContext context)
        {
            if (await context.Products.CountAsync() == 0)
            {
                var products = new List<Product>
{
    new Product { Id = Guid.NewGuid(), Code = "ME001", Name = "Samsung 4K UHD Smart TV", Price = 2499.99m },
    new Product { Id = Guid.NewGuid(), Code = "ME002", Name = "Apple iPhone 13", Price = 4199.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME003", Name = "HP Pavilion Gaming Laptop", Price = 3499.99m },
    new Product { Id = Guid.NewGuid(), Code = "ME004", Name = "Sony WH-1000XM4 Wireless Headphones", Price = 1299.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME005", Name = "Dyson V11 Absolute Vacuum Cleaner", Price = 2999.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME006", Name = "PlayStation 5 Console", Price = 2599.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME007", Name = "Samsung Galaxy Tab S7", Price = 2699.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME008", Name = "Bose SoundLink Revolve Bluetooth Speaker", Price = 799.99m },
    new Product { Id = Guid.NewGuid(), Code = "ME009", Name = "Canon EOS M50 Mark II Camera", Price = 2999.00m },
    new Product { Id = Guid.NewGuid(), Code = "ME010", Name = "Jabra Elite 85t True Wireless Earbuds", Price = 999.00m }
};

                await context.Products.AddRangeAsync(products);
                await context.SaveChangesAsync();
            }
        }
    }
}
