import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('non-veg');

  const menuData = {
    'non-veg': [
      { id: 1, name: 'Chicken Curry', description: 'Traditional Odia chicken curry with aromatic spices', price: 180, image: 'https://images.unsplash.com/photo-1585422752071-5d6d24a1a9f5?w=400&h=300&fit=crop' },
      { id: 2, name: 'Mutton Korma', description: 'Creamy mutton korma with Odia flavors', price: 220, image: 'https://images.unsplash.com/photo-1599447405002-3b43499f4d52?w=400&h=300&fit=crop' },
      { id: 3, name: 'Fish Curry', description: 'Spicy fish curry with mustard seeds', price: 160, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
      { id: 4, name: 'Egg Curry', description: 'Hard-boiled eggs in spicy gravy', price: 120, image: 'https://images.unsplash.com/photo-1578656336544-3b78f45633e7?w=400&h=300&fit=crop' },
      { id: 5, name: 'Chicken Karahi', description: 'Smoky chicken karahi with bell peppers', price: 190, image: 'https://images.unsplash.com/photo-1585422752071-5d6d24a1a9f5?w=400&h=300&fit=crop' }
    ],
    'veg': [
      { id: 6, name: 'Paneer Butter Masala', description: 'Creamy paneer in buttery gravy', price: 140, image: 'https://images.unsplash.com/photo-1595681565077-97b6b7c0e5f5?w=400&h=300&fit=crop' },
      { id: 7, name: 'Dal Tadka', description: 'Tempered lentils with ghee and spices', price: 90, image: 'https://images.unsplash.com/photo-1588247873315-4e9c2c5a0e5e?w=400&h=300&fit=crop' },
      { id: 8, name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables', price: 130, image: 'https://images.unsplash.com/photo-1546069901-19e2c4b8c7a1?w=400&h=300&fit=crop' },
      { id: 9, name: 'Aloo Gobi', description: 'Potato and cauliflower curry', price: 100, image: 'https://images.unsplash.com/photo-1571093613624-19fa0fff4b82?w=400&h=300&fit=crop' },
      { id: 10, name: 'Mixed Veg', description: 'Assorted seasonal vegetables', price: 110, image: 'https://images.unsplash.com/photo-1546069901-d20b0f6b7c6e?w=400&h=300&fit=crop' }
    ],
    'starter': [
      { id: 11, name: 'Chicken Wing', description: 'Crispy chicken wings with dip', price: 120, image: 'https://images.unsplash.com/photo-155031035-41b6f6a9e7c7?w=400&h=300&fit=crop' },
      { id: 12, name: 'Paneer Tikka', description: 'Grilled paneer skewers', price: 100, image: 'https://images.unsplash.com/photo-1544022231-b7ac5e4a3a5e?w=400&h=300&fit=crop' },
      { id: 13, name: 'Veg Spring Roll', description: 'Crispy vegetable spring rolls', price: 80, image: 'https://images.unsplash.com/photo-1563986768609-322da1753552?w=400&h=300&fit=crop' },
      { id: 14, name: 'Chicken Lollipop', description: 'Spicy chicken lollipop', price: 130, image: 'https://images.unsplash.com/photo-1551782450-3e56a3333c4e?w=400&h=300&fit=crop' },
      { id: 15, name: 'Baked Samosa', description: 'Crispy samosas with chutney', price: 60, image: 'https://images.unsplash.com/photo-1565299624643-9fe5a0c6a4b7?w=400&h=300&fit=crop' }
    ],
    'dessert': [
      { id: 16, name: 'Rasgulla', description: 'Soft spongy desi sweet', price: 70, image: 'https://images.unsplash.com/photo-1571093613624-19fa0fff4b82?w=400&h=300&fit=crop' },
      { id: 17, name: 'Gulab Jamun', description: 'Sweet dumplings in sugar syrup', price: 65, image: 'https://images.unsplash.com/photo-1551782450-3e56a3333c4e?w=400&h=300&fit=crop' },
      { id: 18, name: 'Mango Lassi', description: 'Refreshing mango yogurt drink', price: 50, image: 'https://images.unsplash.com/photo-1546069901-19e2c4b8c7a1?w=400&h=300&fit=crop' },
      { id: 19, name: 'Besan Ladoo', description: 'Gram flour sweet balls', price: 80, image: 'https://images.unsplash.com/photo-1585422752071-5d6d24a1a9f5?w=400&h=300&fit=crop' },
      { id: 20, name: 'Ice Cream', description: 'Creamy vanilla ice cream', price: 55, image: 'https://images.unsplash.com/photo-1563986768609-322da1753552?w=400&h=300&fit=crop' }
    ],
    'drinks': [
      { id: 21, name: 'Sweet Lassi', description: 'Traditional yogurt-based drink', price: 45, image: 'https://images.unsplash.com/photo-1546069901-19e2c4b8c7a1?w=400&h=300&fit=crop' },
      { id: 22, name: 'Nimbu Pani', description: 'Fresh lemon water', price: 30, image: 'https://images.unsplash.com/photo-1544022231-b7ac5e4a3a5e?w=400&h=300&fit=crop' },
      { id: 23, name: 'Masala Chai', description: 'Spiced tea with milk', price: 35, image: 'https://images.unsplash.com/photo-1534306408-9135-c048dda9b4d6?w=400&h=300&fit=crop' },
      { id: 24, name: 'Cold Coffee', description: 'Iced coffee with cream', price: 60, image: 'https://images.unsplash.com/photo-1578656336544-3b78f45633e7?w=400&h=300&fit=crop' },
      { id: 25, name: 'Soft Drink', description: 'Carbonated soft drink', price: 25, image: 'https://images.unsplash.com/photo-155031035-41b6f6a9e7c7?w=400&h=300&fit=crop' }
    ],
    'icecream': [
      { id: 26, name: 'Vanilla Ice Cream', description: 'Classic vanilla flavor', price: 45, image: 'https://images.unsplash.com/photo-1563986768609-322da1753552?w=400&h=300&fit=crop' },
      { id: 27, name: 'Chocolate Ice Cream', description: 'Rich chocolate flavor', price: 50, image: 'https://images.unsplash.com/photo-1546069901-19e2c4b8c7a1?w=400&h=300&fit=crop' },
      { id: 28, name: 'Strawberry Ice Cream', description: 'Fresh strawberry flavor', price: 45, image: 'https://images.unsplash.com/photo-1571093613624-19fa0fff4b82?w=400&h=300&fit=crop' },
      { id: 29, name: 'Mango Ice Cream', description: 'Seasonal mango delight', price: 55, image: 'https://images.unsplash.com/photo-1546069901-19e2c4b8c7a1?w=400&h=300&fit=crop' },
      { id: 30, name: 'Butterscotch Ice Cream', description: 'Caramel butterscotch swirl', price: 55, image: 'https://images.unsplash.com/photo-1563986768609-322da1753552?w=400&h=300&fit=crop' }
    ]
  };

  return (
    <section className="menu-section">
      <div className="category-tabs">
        {Object.keys(menuData).map(category => (
          <button 
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="menu-items">
        {menuData[activeCategory].map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="order-options">
        <button className="btn dine-in">🏠 Dine In</button>
        <button className="btn order-online">📱 Order Online</button>
      </div>
    </section>
  );
};

export default Menu;